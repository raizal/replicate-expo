import clsx from 'clsx';
import { styled } from 'nativewind';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

import { Flex, Heading, Price, PriceChangeText, Body } from '@components/Base';
import { SvgOverrideUri } from '@components/SvgOverrideUri';
import { priceChangesHelper, priceFormatHelper } from '@src/helper';
import { usePrevious } from '@src/helper/use-previous';
import { DateRange } from '@src/types/PriceChange';

const Logo = styled(SvgOverrideUri);

interface CryptoItemCardProps {
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  latestPrice?: number;
  dateRange: DateRange;
  day?: string;
  week?: string;
  month?: string;
  year?: string;
  color: string;
}

const bearish = '#FF5A5A';
const bullish = '#1CCB21';
const normal = '#171717';

const CryptoItemCard: React.FC<CryptoItemCardProps> = ({
  logo,
  name,
  currencySymbol,
  latestPrice,
  day,
  dateRange,
  month,
  week,
  year,
  color,
}) => {
  const percentage = priceChangesHelper({
    day,
    dateRange,
    month,
    week,
    year,
  });
  const prevPrice = usePrevious<number | undefined>(latestPrice);

  const priceChange = useSharedValue(0);

  const priceChangeWithTiming = useDerivedValue(() => {
    return withTiming(priceChange.value, {
      duration: 750,
    });
  });

  useEffect(() => {
    if (latestPrice && prevPrice) {
      if (latestPrice > prevPrice) {
        priceChange.value = -1;
      } else if (latestPrice < prevPrice) {
        priceChange.value = 1;
      }
      setTimeout(() => {
        priceChange.value = 0;
      }, 900);
    }
  }, [latestPrice, prevPrice, priceChange]);

  const animatedStyle = useAnimatedStyle(() => {
    const animatedColor = interpolateColor(
      priceChangeWithTiming.value,
      [-1, 0, 1],
      [bullish, normal, bearish]
    );
    return {
      color: animatedColor,
    };
  });

  return (
    <Flex tw="flex-row py-5 px-5 items-center bg-white">
      <Flex tw="h-[32px] w-[32px] mr-4">
        <Logo width={32} height={32} uri={logo} fill={color} />
      </Flex>
      <Flex tw="flex-col flex-1">
        <Heading>{name}</Heading>
        <Body>{currencySymbol}</Body>
      </Flex>
      <Flex tw="flex-col items-end flex-1">
        <Price style={[animatedStyle]} tw="min-w-full text-right">
          {priceFormatHelper(latestPrice || 0)}
        </Price>
        <Flex tw="flex-row">
          <Flex
            style={[
              styles.priceChangeBase,
              percentage > 0 && styles.priceChangeUp,
              percentage < 0 && styles.priceChangeDown,
            ]}
          />
          <PriceChangeText
            tw={clsx(
              percentage === 0 && 'text-neutral-900',
              percentage > 0 && 'text-green-900',
              percentage < 0 && 'text-red-900'
            )}>
            {`${percentage}`}%%
          </PriceChangeText>
        </Flex>
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  priceChangeBase: {
    borderStyle: 'solid',
    marginRight: 5,
    alignSelf: 'center',
    width: 0,
    height: 0,
  },
  priceChangeUp: {
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'rgb(28, 203, 33)',
    borderTopWidth: 0,
    borderBottomWidth: 8,
    borderLeftWidth: 6,
    borderRightWidth: 6,
  },
  priceChangeDown: {
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'rgb(255, 90, 90)',
    borderTopWidth: 8,
    borderBottomWidth: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
  },
});

export default React.memo(CryptoItemCard);

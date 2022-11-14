import { styled } from 'nativewind';
import React from 'react';
import { FlatList, View as RNView, StyleSheet } from 'react-native';

import CryptoItemCard from '@components/CryptoItemCard/CryptoItemCard';
import { CurrencyPrice } from '@src/types/Currency';
import { DateRange } from '@src/types/PriceChange';

const View = styled(RNView);

const Separator = () => {
  return <View tw="w-full bg-gray-900 h-{4}" style={separatorStyle.separator} />;
};

const separatorStyle = StyleSheet.create({
  separator: {
    height: 2,
  },
});

interface CurrencyListProps {
  items: CurrencyPrice[];
  onRefresh?: () => void;
  refreshing?: boolean;
  dateRange?: DateRange;
}

const renderItem =
  (dateRange: DateRange = 'daily') =>
  ({ item }: { item: CurrencyPrice }) => {
    return (
      <CryptoItemCard
        key={item.currencySymbol}
        currencySymbol={item.currencySymbol}
        name={item.name}
        logo={item.logo}
        decimal_point={item.decimal_point}
        day={item.priceInfo.day}
        month={item.priceInfo.month}
        week={item.priceInfo.week}
        year={item.priceInfo.year}
        dateRange={dateRange}
        latestPrice={parseInt(item.priceInfo.latestPrice, 10)}
        color={item.color}
      />
    );
  };

const CurrencyList = ({ items, dateRange = 'daily', onRefresh, refreshing }: CurrencyListProps) => {
  return (
    <FlatList<CurrencyPrice>
      data={items}
      renderItem={renderItem(dateRange)}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={Separator}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default CurrencyList;

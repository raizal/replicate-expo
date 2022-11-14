import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import CryptoItemCard from '@components/CryptoItemCard/CryptoItemCard';

const cryptoItem = {
  currencySymbol: 'USDT',
  name: 'Tether',
  logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_USDT.svg',
  decimal_point: 6,
  latestPrice: 15487,
  day: '-0.36',
  week: '-1.38',
  month: '0.15',
  year: '8.34',
  color: '#15A57C',
};

storiesOf('CryptoItemCard', module)
  .addDecorator((story) => <View>{story()}</View>)
  .add('default', () => <CryptoItemCard {...cryptoItem} dateRange="daily" day="0" />)
  .add('price-up', () => <CryptoItemCard {...cryptoItem} dateRange="daily" />)
  .add('price-down', () => <CryptoItemCard {...cryptoItem} dateRange="daily" day="0.36" />);

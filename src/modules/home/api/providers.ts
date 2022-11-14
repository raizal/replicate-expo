import { useQuery, UseQueryResult } from 'react-query';

import { getPriceChanges, getSupportedCurrencies } from '@modules/home/api/requests';
import { Currency } from '@src/types/Currency';
import { PriceChange } from '@src/types/PriceChange';
import { Response } from '@src/types/Response';

export const useSupportedCurrencies = (): UseQueryResult<Response<Currency>> =>
  useQuery(['market-supported-currencies'], getSupportedCurrencies);

export const usePriceChanges = (): UseQueryResult<Response<PriceChange>> =>
  useQuery(['market-price-changes'], getPriceChanges, {
    cacheTime: 0,
  });

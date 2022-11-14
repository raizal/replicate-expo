import { useCallback, useEffect, useState } from 'react';

import { currencyListToMapped } from '@src/helper/utils';
import { usePriceChanges, useSupportedCurrencies } from '@modules/home/api/providers';
import { CurrencyPrice, MapCurrency } from '@src/types/Currency';
import { DateRange } from '@src/types/PriceChange';

export const useHome = () => {
  const [currencies, setCurrencies] = useState<MapCurrency>({});
  const [currencyPrices, setCurrencyPrices] = useState<CurrencyPrice[]>([]);

  const [dateRange, setDateRange] = useState<DateRange>('daily');

  const { isLoading: isLoadingSupportedCurrencies, data: dataCurrency } = useSupportedCurrencies();

  const { isLoading: isLoadingPriceChanges, data: dataPriceChanges, refetch } = usePriceChanges();

  const switchDateRange = useCallback(
    (date: DateRange) => {
      if (date !== dateRange) {
        setDateRange(date);
      }
    },
    [dateRange]
  );

  useEffect(() => {
    if (dataCurrency?.payload && dataCurrency?.payload.length > 0) {
      setCurrencies(currencyListToMapped(dataCurrency?.payload));
    }
  }, [dataCurrency?.payload]);

  useEffect(() => {
    if (
      Object.keys(currencies).length > 0 &&
      dataPriceChanges?.payload &&
      dataPriceChanges?.payload.length > 0
    ) {
      const curPrices = dataPriceChanges?.payload.map((price) => {
        const currency = currencies[price.pair.split('/')[0].toUpperCase()];
        return {
          ...currency,
          priceInfo: price,
        };
      });
      setCurrencyPrices(curPrices);
    }
  }, [currencies, dataPriceChanges?.payload]);

  useEffect(() => {
    const idInterval = setInterval(() => refetch(), 2500);
    return () => {
      clearInterval(idInterval);
    };
  });

  return {
    supportedCurrencies: dataCurrency?.payload || [],
    isLoadingSupportedCurrencies,
    isLoadingPriceChanges,
    dataPriceChanges,
    currencies,
    priceChanges: dataPriceChanges?.payload || [],
    currencyPrices,
    refetch,
    setDateRange,
    dateRange,
    switchDateRange,
  };
};

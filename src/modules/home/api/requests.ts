import http from '@services/http';
import { Currency } from '@src/types/Currency';
import { PriceChange } from '@src/types/PriceChange';
import { Response } from '@src/types/Response';

export const getSupportedCurrencies = async (): Promise<Response<Currency>> => {
  const { data } = await http.get<Response<Currency>>('/wallet/supportedCurrencies');
  return data;
};

export const getPriceChanges = async (): Promise<Response<PriceChange>> => {
  const { data } = await http.get<Response<PriceChange>>('/trade/price-changes');
  return data;
};

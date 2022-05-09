export interface ICoin {
  coininfo?: ICoinInfoType;
  load: boolean;
  coinId?: string;
}
export interface ICoinType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
}
export interface IListType {
  coindata?: ICoinType[];
  isLoading: boolean;
}
export interface ICoinInfoType {
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  hash_algorithm: string;
}
export interface IPriceInfoType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    }
  };
}// 잠시 보류
export interface IChartInfoType {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
export interface IOutletProps {
  priceLoad?: boolean;
  priceData?: IPriceInfoType;
  chartLoad?: boolean;
  chartData?: IChartInfoType[];
}
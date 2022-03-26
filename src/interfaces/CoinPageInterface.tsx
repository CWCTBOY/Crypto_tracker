export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
export interface LocationState {
  name: string;
}
export interface CoinIdType {
  coinId: string;
}
const BASE_URL = 'https://api.coinpaprika.com/v1';
export const coinFetcher = async () => {
  const json = await (await fetch(`${BASE_URL}/coins`)).json();
  const data = json.slice(0, 30);
  return data
};//Home.tsx
export const priceFetcher = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};//Price.tsx ==> 여기 링크 손좀 봐야댐
export const chartFetcher = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical`)).json();
};//Chart.tsx ==> 여기 링크 손좀 봐야댐
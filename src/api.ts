const BASE_URL = 'https://api.coinpaprika.com/v1'
export const coinFetcher = async () => {
  const json = await (await fetch(`${BASE_URL}/coins`)).json();
  const data = json.slice(0, 30);
  return data
}//Home.tsx
export const priceFetcher = async (coinId: string) => {
  const json = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  const data = json.slice(0, 30);
  return data
}//Price.tsx
export const chartFetcher = async (coinId: string) => {
  const json = await (await fetch(`${BASE_URL}/trickers/${coinId}`)).json();
  const data = json.slice(0, 30);
  return data
}//Chart.tsx
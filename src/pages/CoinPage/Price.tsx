import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

interface IPriceInfo {
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
}//여기까지 했음


function Price() {
  const { coinId } = useParams();
  const [priceinfo, setPriceinfo] = useState<IPriceInfo[]>();
  useEffect(() => {
    (async () => {
      const request = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
      setPriceinfo(request);
    })()
  }, [])
  return (
    <h1>price</h1>
  )
}// 인터페이스 작성완료, 데이터 바인딩 하고 UI만들기
export default Price
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
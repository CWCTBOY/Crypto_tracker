import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Coin from '../components/CoinPage/coinpage'

export interface ICoinInfo {
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  hash_algorithm: string;
}

export default function CoinPage() {
  const { coinId } = useParams();
  const [coininfo, setCoininfo] = useState<ICoinInfo>();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    (async () => {
      const request = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      setCoininfo(request);
      setLoad(true);
    })();
  }, [])
  return (
    <Coin coininfo={coininfo} load={load} />
  )
}
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
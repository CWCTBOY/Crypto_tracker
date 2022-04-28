import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Coin from '../components/CoinPage/coinpage'
import { ICoinInfoType } from "../type";



export default function CoinPage() {
  const { coinId } = useParams();
  const [coininfo, setCoininfo] = useState<ICoinInfoType>();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    (async () => {
      const request = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      setCoininfo(request);
      setLoad(true);
    })();
  }, [])
  return (
    <Coin coininfo={coininfo} load={load} coinId={coinId} />
  )
}
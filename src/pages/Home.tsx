import { useEffect, useState } from "react";
import List from "../components/Home/list";

export interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
}

function Home() {
  const [load, setLoad] = useState(false);
  const [coindata, setCoindata] = useState<ICoinData[]>();
  useEffect(() => {
    (async () => {
      const request = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
      setCoindata(request.slice(0, 80));
      setLoad(true);
    })();
  }, [])
  return (
    <List coindata={coindata} load={load} />
  )
}
export default Home;
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
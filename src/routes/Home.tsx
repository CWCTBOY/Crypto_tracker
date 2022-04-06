import { useEffect, useState } from "react";
import { Coin, ListBox, CoinImg } from "../styles/Home/CoinList";
import { Loader, LoadText } from '../styles/Global/GlobalLayout';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
}

function Home() {
  const [load, setLoad] = useState(false);
  const [coindata, setCoindata] = useState<CoinData[]>();
  useEffect(() => {
    (async () => {
      const request = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
      setCoindata(request.slice(0, 80));
      setLoad(true);
    })();
  }, [])
  return (
    <ListBox>
      {
        !load
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : (
            coindata?.map((item, index) => (
              <Coin key={index}>
                <CoinImg src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${item.name.toLowerCase().split(" ").join("-")}.png`} />
                {item.symbol} &rarr; {item.name}
              </Coin>)//라우터 연결하기
            )
          )
      }
    </ListBox>
  )
}
export default Home;
//https://api.coinpaprika.com/v1/coins
//Reacts
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//Interfaces
import { ICoinData } from '../interfaces/HomeInterface';
//Styles
import { Container, Header, Title, Loader, CoinList, Coin } from '../styles/HomeStyle';
//Components

function Home() {
  const [coindata, setCoindata] = useState<ICoinData[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const coins = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
      setCoindata(coins.slice(0, 100));
      setLoad(false);
    })();
  }, [])
  return (
    <Container>
      <Header>
        <Link to={{
          pathname: '/',
        }}>
          <Title>Coin Tracker</Title>
        </Link>
      </Header>
      <CoinList>
        {
          load
            ? <Loader>Loading...</Loader>
            : coindata.map(coin =>
              <Link to={{
                pathname: `/${coin.id}`,
                state: {
                  name: coin.name
                }//코인페이지에서 타이틀로 사용예정
              }}>
                <Coin key={coin.id}>
                  <img src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.name.toLowerCase().split(" ").join("-")}.png`} style={{ margin: '0 5px 0 0' }} />
                  {coin.name} &rarr; {coin.symbol}
                </Coin>
              </Link>
            )
        }
      </CoinList>
    </Container >
  )
}
export default Home;
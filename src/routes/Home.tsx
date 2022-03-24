//React
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//styles
import styled from 'styled-components';
//components

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 15px;
`;
const Header = styled.header`
  height: 10vh;
`;
const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size:  35px;
`;
const Loader = styled.h2`
  font-size: 20px;
`;
const CoinList = styled.ul`
  max-width: 480px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Coin = styled.li`
  color: ${props => props.theme.bgColor};
  background-color: ${props => props.theme.txtColor};
  width: auto;
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 17px;
  transition: all 0.3s ease;
  &:hover {
      color: ${props => props.theme.txtColor};
      background-color: ${props => props.theme.btnColor};
  }
`;

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Home() {
  const [coindata, setCoindata] = useState<CoinData[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const coins = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
      setCoindata(coins.slice(0, 50));
      setLoad(false);
    })();
  }, [])
  return (
    <Container>
      <Link to={'/'}>
        <Header><Title>Coin Tracker</Title></Header>
      </Link>
      <CoinList>
        {
          load
            ? <Loader>Loading...</Loader>
            : coindata.map(coin =>
              <Link to={{
                pathname: `/${coin.name}`,
                state: {
                  name: coin.name
                }
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
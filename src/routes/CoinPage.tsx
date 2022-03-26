//Reacts
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ILocationState, ICoinIdType, IInfoData, IPriceData } from '../interfaces/CoinPageInterface';
//Styles
import { Container, Header, Title, Loader, CoinList, Coin } from '../styles/HomeStyle';

function CoinPage() {
  const [infodata, setInfodata] = useState<IInfoData>();
  const [pricedata, setPricedata] = useState<IPriceData>();
  const [load, setLoad] = useState(true);
  const { state: { name } } = useLocation<ILocationState>();
  const { coinId } = useParams<ICoinIdType>();
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      setInfodata(infoData);
      setPricedata(priceData);
    })();
  }, [])
  return (
    <Container>
      <Header>
        <Link to={{
          pathname: '/',
        }}
        >
          <Title>Coin Tracker</Title>
        </Link>
      </Header>
      {
        load
          ? <Loader>Loading...</Loader>
          : null
      }
    </Container >
  )
}

export default CoinPage;
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
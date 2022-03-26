//Reacts
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ILocationState, ICoinIdType } from '../interfaces/CoinPageInterface';
//Styles
import { Container, Header, Title, Loader, CoinList, Coin } from '../styles/HomeStyle';

function CoinPage() {
  const [infodata, setInfodata] = useState({});
  const [pricedata, setPricedata] = useState({});
  const [load, setLoad] = useState<boolean>(true);
  const { state: { name } } = useLocation<ILocationState>();
  const { coinId } = useParams<ICoinIdType>();
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/trickers/${coinId}`)).json();
      setInfodata(infoData);
      setPricedata(priceData);
      console.log(infodata);
      console.log(pricedata);
    })();
  }, [])
  return (
    <Container>
      <Header><Title>Coin Tracker</Title></Header>
      {
        load
          ? <Loader>Loading...</Loader>
          : null
      }
    </Container >
  )
}

export default CoinPage;
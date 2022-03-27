//Reacts
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
//Interfaces
import { ILocationState, ICoinIdType, IInfoData, IPriceData } from '../interfaces/CoinPageInterface';
import { OverviewItem } from '../components/OverviewItem';
//Styles
import { Container, Header, Title, Loader } from '../styles/HomeStyle';

function CoinPage() {
  const { state: { name } } = useLocation<ILocationState>();
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
      <OverviewItem />
    </Container >
  )
}

export default CoinPage;
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
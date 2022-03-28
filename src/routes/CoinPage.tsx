//Styles
import { Container, Header, Title } from '../styles/HomeStyle';
//Reacts
import { useParams, Link, useLocation, Switch, Route } from 'react-router-dom';
//Interfaces
import { ILocationState, ICoinIdType } from '../interfaces/CoinPageInterface';
import { OverviewItem } from '../components/OverviewItem';
//component
import Chart from './Chart';
import Price from './Price';

export default function CoinPage() {
  const { state: { name } } = useLocation<ILocationState>();
  const { coinId } = useParams<ICoinIdType>();
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
      <OverviewItem coinId={coinId} />
      <Switch>
        <Route path={`/:coinId/chart`} component={Chart} >

        </Route>
        <Route path={`/:coinId/price`} component={Price} />
      </Switch>
    </Container >
  )
}

//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
//Styles
import { Container, Header, Title } from '../styles/HomeStyle';
//Reacts
import { useParams, Link } from 'react-router-dom';
//Interfaces
import { ICoinIdType } from '../interfaces/CoinPageInterface';
import { OverviewItem } from '../components/OverviewItem';

export default function CoinPage() {
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
    </Container >
  )
}
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
//Styles
import { Container, Header, Title } from '../styles/HomeStyle';
//Reacts
import { useParams, Link } from 'react-router-dom';
//Components
import { OverviewItem } from '../components/OverviewItem';

export default function CoinPage() {
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
//https://api.coinpaprika.com/v1/coins/btc-bitcoin
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
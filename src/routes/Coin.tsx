//React
import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
//styled
import styled from 'styled-components';
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
interface State {
  name: string;
}
function CoinPage() {
  const [coindata, setCoindata] = useState<CoinData[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  const { state } = useLocation<State>();
  return (
    <Container>
      <Header><Title>{state?.name || `Loading...`} Tracker</Title></Header>
      {
        load
          ? <Loader>Loading...</Loader>
          : null
      }
    </Container >
  )
}

export default CoinPage;
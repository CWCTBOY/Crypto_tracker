import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Wrapper, Header, Title } from './styles/Global/GlobalHeader'
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import Chart from "./pages/CoinPage/Chart";
import Price from "./pages/CoinPage/Price";

export default function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header>
          <Link to='/'>
            <Title>Coin Tracker</Title>
          </Link>
        </Header>
      </Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<CoinPage />}>
          <Route path="/:coinId/price" element={<Price />} />
          <Route path="/:coinId/chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
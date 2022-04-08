import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Wrapper, Header, Title } from './styles/Global/GlobalHeader'
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";

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
        <Route path="/:coinId" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  )
}
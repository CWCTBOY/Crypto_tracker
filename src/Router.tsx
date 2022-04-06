import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Wrapper, Header, Title } from './styles/Global/GlobalHeader'
import CoinPage from "./routes/CoinPage";
import Home from "./routes/Home";

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
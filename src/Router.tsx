import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Wrapper, Header, Title, ThemeBtn } from "./styles/Global/globalHeader";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import Chart from "./pages/CoinPage/Chart";
import Price from "./pages/CoinPage/Price";

export default function Router({ themeSwitch, themeToggle }: { themeSwitch: boolean, themeToggle: () => void }) {
  console.log(themeSwitch);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Header>
          <Link to='/'>
            <Title>Coin Tracker</Title>
          </Link>
          <ThemeBtn themeSwitch={themeSwitch}>
            <div onClick={themeToggle} />
          </ThemeBtn>
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
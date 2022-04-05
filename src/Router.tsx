import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./routes/CoinPage";
import Home from "./routes/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  )
}
//React
import { useState } from 'react';
import { useParams } from 'react-router-dom';
//styled
import styled from 'styled-components';

interface CoinId {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<CoinId>();
  console.log(coinId);
  return (
    <h1>Coin</h1>
  )
}

export default Coin;
import styled from "styled-components";
import { ListBox } from "../Home/CoinList";

export const CoinBox = styled(ListBox)``;

export const Name = styled.h2`
  color: ${props => props.theme.txtColor};
  font-size: 35px;
`
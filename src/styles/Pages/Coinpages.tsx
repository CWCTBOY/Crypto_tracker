import styled from "styled-components";
import { ListBox } from "../Home/CoinList";

export const CoinBox = styled(ListBox)``;

export const Name = styled.h2`
  color: ${props => props.theme.txtColor};
  font-size: 35px;
  margin: 0 0 50px 0;
`
export const InfoWrapper = styled.div`
  width: 450px;
  height: 80px;
  border-radius: 10px;
  border: 0.5px solid ${props => props.theme.txtColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 30px 0;
`
export const InfoBox = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Info = styled.span`
  margin: 5px 0 5px 0;
  &:nth-child(2) {
    color: ${props => props.theme.accentColor};
  }
`
export const CoinDescription = styled.span`
  display: block;
  text-align: left;
  width: 430px;
  height: auto;
  margin: 0 0 30px 0;
`
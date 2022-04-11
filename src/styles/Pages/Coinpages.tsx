import styled, { css, keyframes } from "styled-components";
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
export const BtnWrapper = styled.div`
  width: 450px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`
export const NestedBtn = styled.button`
  width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.txtColor};
  border: 1px solid ${props => props.theme.accentColor};
  border-radius: 5px;
  background-color: ${props => props.theme.bgColor};
  cursor: pointer;
  &:focus {
    border: 1px solid ${props => props.theme.txtColor};
  }
  transition: color 0.1s linear, border-color 0.1s linear;
  &:hover {
    color: ${props => props.theme.accentColor};
    border-color: ${props => props.theme.txtColor};
  }
`
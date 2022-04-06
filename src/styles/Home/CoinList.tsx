import styled from "styled-components";

export const ListBox = styled.div`
  max-width: 550px;
  height: auto;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Coin = styled.div`
  width: 300px;
  height: 70px;
  margin: 10px;
  border: 0.5px solid ${props => props.theme.txtColor};
  border-radius: 10px;
  color: ${props => props.theme.txtColor};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.btnColor};
    color: ${props => props.theme.bgColor};
    transform: translateX(20px);
  }
`
export const CoinImg = styled.img`
  margin: 0 12px 0 12px;
  width: 25px;
`
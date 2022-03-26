import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 15px;
`;
export const Header = styled.header`
  height: 10vh;
`;
export const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size:  35px;
`;
export const Loader = styled.h2`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  background-color: rgba(0,0,0,0.4);
  color: ${props => props.theme.bgColor};
  border-radius: 30px;
  margin-top: 200px;
`;
export const CoinList = styled.ul`
  max-width: 480px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Coin = styled.li`
  color: ${props => props.theme.txtColor};
  background-color: ${props => props.theme.bgColor};
  border: 1px solid ${props => props.theme.txtColor};
  width: 300px;
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 20px 0 20px 10px;
  border-radius: 5px;
  font-size: 17px;
  transition: all 0.3s ease;
  &:hover {
      color: ${props => props.theme.bgColor};
      background-color: ${props => props.theme.btnColor};
      transform: translateX(25px);
  }
`;
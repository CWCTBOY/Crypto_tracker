import styled from "styled-components";

export const Overview = styled.div`
  max-width: 480px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OverviewList = styled.div`
  width: 480px;
  height: 80px;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.txtColor};
`;
export const Item = styled.div`
  width: auto;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.bgColor};
`;
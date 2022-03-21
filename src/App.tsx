import { useState } from 'react';
import styled from 'styled-components';
import './reset.css';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
`;
const H1 = styled.h1`
  color: ${props => props.theme.txtColor};
`;

function App() {
  return (
    <Container>
      <H1>hi</H1>
    </Container>
  );
}

export default App;
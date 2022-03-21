import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 300px;
  background-color: ${props => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

function Circle(props: CircleProps) {
  return (
    <Container bgColor={props.bgColor} />
  )
}

export default Circle;
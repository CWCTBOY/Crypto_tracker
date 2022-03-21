import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<CircleProps>`
  width: 300px;
  height: 300px;
  background-color: ${props => props.bgColor};
  border: ${props => props.borderColor} 10px solid;
`;


function Circle(props: CircleProps) {
  return (
    <Container bgColor={props.bgColor} borderColor={props.borderColor ?? props.bgColor} />
  )
}

export default Circle;
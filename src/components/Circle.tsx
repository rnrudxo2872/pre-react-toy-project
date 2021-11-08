import { memo } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor:string,
  borderColor:string
}

interface CircleProps {
  bgColor:string,
  borderColor?:string
}

const Container = styled.div<ContainerProps>`
  width: 150px;
  height: 150px;
  border-radius: 20%;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.borderColor} 2px solid;
`;

function Circle({bgColor, borderColor}:CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>;
}

export default memo(Circle);

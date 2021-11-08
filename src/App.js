import styled from "styled-components"

const Father = styled.div`
  display:flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width:100px;
  height:100px;
`
const Circle = styled(Box)`
  border-radius:100%;
`

function App() {
  return (
    <Father className="App">
      <Box bgColor={"tomato"}/>
      <Box bgColor={"blue"}/>
      <Circle bgColor="red"/>
    </Father>
  );
}

export default App;

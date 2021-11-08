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

const Btn = styled.button`
  background-color: tomato;
  border: 0;
  border-radius: 10px;
`

const Input = styled.input.attrs({required:true})`
  background-color: blue;
`

function App() {
  return (
    <Father className="App">
      <Box bgColor={"tomato"}/>
      <Box bgColor={"blue"}/>
      <Circle bgColor="red"/>
      <Btn as='a' href="/ee">ee</Btn>
      <Input />
    </Father>
  );
}

export default App;

import styled, {keyframes} from "styled-components"

const Wrapper = styled.div`
  display:flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const keyframe = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0;
  }
  50%{
    transform:rotate(180deg);
    border-radius:50%;
  }
  100% {
    transform:rotate(360deg);
    border-radius:0;
  }
`

const Icon = styled.span`
  
`

const Box = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width:200px;
  height:200px;
  background-color: tomato;
  animation: ${keyframe} 2s infinite cubic-bezier(.33,.37,.7,.68);
  color:white;

  ${Icon} {
    font-size: 20px;
    transition: font-size 3s;
    &:hover {
      font-size: 40px;
    }
    &:active {
      font-size: 10px;
    }
  }
`

function App() {
  return (
    <Wrapper className="App">
      <Box>
        <Icon>😎</Icon>
      </Box>
      <Box>
        hello
      </Box>
    </Wrapper>
  );
}

export default App;

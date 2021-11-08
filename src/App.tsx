import styled, {keyframes} from "styled-components"
import Circle from "./components/Circle";

function App() {
  return (
    <div className="App">
      <Circle bgColor="black" />
      <Circle bgColor="tomato" borderColor="blue"/>
    </div>
  );
}

export default App;

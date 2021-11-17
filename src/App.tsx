import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms/mode";
import DarkButton from "./components/DarkButton";
import Routers from "./routes/Routers";
import { GlobalStyled } from "./styledComponets/index.styled";
import { DarkTheme, LightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <GlobalStyled />
      <Routers />
      <DarkButton />
    </ThemeProvider>
  )
}

export default App;

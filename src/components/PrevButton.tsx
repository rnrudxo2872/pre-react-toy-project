import { useHistory } from "react-router";
import { PreBtn } from "../styledComponets/PrevButton.styled";

function PrevButton() {
  const history = useHistory();
  const onClick = () => history.push("/");
  return <PreBtn onClick={onClick}>‹</PreBtn>;
}

export default PrevButton;

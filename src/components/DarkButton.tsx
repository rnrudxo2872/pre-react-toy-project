import { IsDarkButton } from "../styledComponets/DarkButton.styled";
import { ReactComponent as Moon } from "../moon.svg";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms/mode";

function DarkButton() {
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkMode = () => setDarkAtom(value => !value);

    return (
        <IsDarkButton onClick={toggleDarkMode}>
            <Moon />
            <span>다크모드</span>
        </IsDarkButton>
    )
}

export default DarkButton;
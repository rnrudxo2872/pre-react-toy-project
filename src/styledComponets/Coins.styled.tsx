import styled from "styled-components"

export const Wrapper = styled.article`
    margin: 0 auto;
    max-width: 480px;
`
export const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1`
    color: ${(props) => props.theme.titleColor};
`
export const CoinList = styled.ul``;
export const Coin = styled.li`
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 8px;

    a {
        display: block;
        padding: 10px 20px;
        transition: color 2s cubic-bezier(0.075, 0.82, 0.165, 1), text-shadow 0.5s ease-in;

        &:hover {
            color: #3293e7;
            text-shadow: 1px 0px 3px #0362b6;
        }
    }
`
export const Img = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
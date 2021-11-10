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
    }
`
export const Img = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
import styled from "styled-components"

export const PreBtn = styled.button`
    position: fixed;
    top:10px;
    left:15px;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.textColor};
    font-size: 40px;
`
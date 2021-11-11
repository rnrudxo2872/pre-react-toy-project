import styled from "styled-components"

export const BodyWrapper = styled.article`

`

export const Overview = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.OverveiwColor};
    border-radius: 8px;
    padding: 10px 20px;
    line-height: 150%;
    
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`

export const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span:first-child {
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 3px;
        color:#5394e9cc
    }
`

export const Tabs = styled.section`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 15px;
    margin: 15px 0;
`

export const Tab = styled.button`
    background-color: ${(props) => props.theme.OverveiwColor};
    color:${(props) => props.theme.textColor};
    border: 0;
    border-radius: 20px;

    a:focus {
        outline: none;
    }
`
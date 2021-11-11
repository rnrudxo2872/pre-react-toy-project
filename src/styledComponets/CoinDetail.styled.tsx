import styled from "styled-components"

export const BodyWrapper = styled.article`

`

export const Overview = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.3);
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
    
`

export const Tab = styled.button`
    
`
import { memo, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components"

const CoinInfo = styled.article`
    
`

function CoinDetail() {
    const [loading, setLoading] = useState(true);
    const {state} = useLocation();
    console.log(state)
    return(
        <CoinInfo>
            {loading ? "Loading..." : <CoinInfo>as</CoinInfo>}        
        </CoinInfo>
    );
}

export default memo(CoinDetail);
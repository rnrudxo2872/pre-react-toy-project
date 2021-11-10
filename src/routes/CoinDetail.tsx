import { memo, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { CoinInfo, CoinPrice, CoinRouteParams, CoinRouteState } from "../interfaces/CoinDetail.interface";
import { Header, Title, Wrapper } from "../styledComponets/Coins.styled";

function CoinDetail() {
    const [coinInfo, setCoinInfo] = useState<CoinInfo>();
    const [coinPrice, setCoinPrice] = useState<CoinPrice>();
    const [loading, setLoading] = useState(true);
    const {
        state:{
            coinId:stateCoinId,
            coinName,
            coinRank,
            coinSymbol
        }
    } = useLocation<CoinRouteState>();
    const {coinId} = useParams<CoinRouteParams>();
    
    useEffect(() => {
        (async() => {
            const loadedCoinInfo = await (await fetch(`https://api.coinpaprika.com/v1/coins/${stateCoinId ?? coinId}`)).json();
            setCoinInfo(loadedCoinInfo);
            
            const loadedPriceInfo = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${stateCoinId ?? coinId}`)).json();
            setCoinPrice(loadedPriceInfo);
            console.log(coinInfo, coinPrice)
            setLoading(false);
        })()
    },[])

    return(
        <Wrapper>
            <Header>
                <Title>{coinName}</Title>
            </Header>
            {loading ? "Loading..." : <>{"coinInfo"}</>}        
        </Wrapper>
    );
}

export default memo(CoinDetail);
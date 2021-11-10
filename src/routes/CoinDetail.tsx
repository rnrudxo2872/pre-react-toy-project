import { memo, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { CoinInfo, CoinPrice, CoinRouteParams, CoinRouteState } from "../interfaces/CoinDetail.interface";
import { BodyWrapper, Overview, OverviewItem } from "../styledComponets/CoinDetail.styled";
import { Header, Title, Wrapper } from "../styledComponets/Coins.styled";
import { LoadingImage, LoadingWrapper } from "../styledComponets/Loading.styled";
import loadingImg from "../loading-img.png";

function CoinDetail() {
    const [coinInfo, setCoinInfo] = useState<CoinInfo>();
    const [coinPrice, setCoinPrice] = useState<CoinPrice>();
    const [loading, setLoading] = useState(true);
    const {state} = useLocation<CoinRouteState>();
    const {id} = useParams<CoinRouteParams>();

    useEffect(() => {
        (async() => {
            const loadedCoinInfo = await (await fetch(`https://api.coinpaprika.com/v1/coins/${state?.coinId ?? id}`)).json();
            setCoinInfo(loadedCoinInfo);
            
            const loadedPriceInfo = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${state?.coinId ?? id}`)).json();
            setCoinPrice(loadedPriceInfo);
            setLoading(false);
        })()
    },[coinInfo, coinPrice, id, state?.coinId])

    function renderCoinInfo() {
        return (
            <BodyWrapper>
                <Overview>
                    <OverviewItem>
                        <span>rank</span>
                        <span>{coinInfo?.rank}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>symbol</span>
                        <span>{coinInfo?.symbol}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>active</span>
                        <span>{`${coinInfo?.is_active}`}</span>
                    </OverviewItem>
                </Overview>
                <Overview>
                    {coinInfo?.description}
                </Overview>
                <Overview>
                <OverviewItem>
                        <span>total supply</span>
                        <span>{coinPrice?.total_supply}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>max supply</span>
                        <span>{coinPrice?.max_supply}</span>
                    </OverviewItem>
                </Overview>
            </BodyWrapper>
        )
    }

    return(
        <Wrapper>
            <Header>
                <Title>{state?.coinName ?? (loading ? "Loading..." : coinInfo?.name)}</Title>
            </Header>
                {loading ? <LoadingWrapper><LoadingImage src={loadingImg}/></LoadingWrapper> : renderCoinInfo()}
        </Wrapper>
    );
}

export default memo(CoinDetail);
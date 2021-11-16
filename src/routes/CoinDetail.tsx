import { memo } from "react";
import { Route, Switch, useLocation, useParams, useRouteMatch } from "react-router";
import { CoinInfo, CoinPrice, CoinRouteParams, CoinRouteState } from "../interfaces/CoinDetail.interface";
import { BodyWrapper, Overview, OverviewItem, Tab, Tabs } from "../styledComponets/CoinDetail.styled";
import { Header, Title, Wrapper } from "../styledComponets/Coins.styled";
import { LoadingImage, LoadingWrapper } from "../styledComponets/Loading.styled";
import loadingImg from "../loading-img.png";
import { Link } from "react-router-dom";
import Price from "../components/Price";
import Chart from "../components/Chart";
import { useQuery } from "react-query";
import { fetchCoinAPI } from "../api";
import { Helmet } from "react-helmet-async";
import PrevButton from "../components/PrevButton";

function CoinDetail() {
    const {state} = useLocation<CoinRouteState>();
    const {id} = useParams<CoinRouteParams>();

    const {isLoading:isInfoLoading, error:infoLoadError, data:infoData} = useQuery<CoinInfo>(["info",id], fetchCoinAPI.bind(`coins/${state?.coinId ?? id}`));
    const {isLoading:isTickersLoading, error:tickersLoadError, data:tickersData} = useQuery<CoinPrice>(["tickers",id], fetchCoinAPI.bind(`tickers/${state?.coinId ?? id}`));
    const isLoading = isInfoLoading || isTickersLoading;

    const isChart = useRouteMatch("/:id/chart");
    const isPrice = useRouteMatch("/:id/price");

    if(infoLoadError || tickersLoadError) throw new Error("fetch data error");

    function renderCoinInfo() {
        return (
            <BodyWrapper>
                <Overview>
                    <OverviewItem>
                        <span>rank</span>
                        <span>{infoData?.rank}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>symbol</span>
                        <span>{infoData?.symbol}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>active</span>
                        <span>{`${infoData?.is_active}`}</span>
                    </OverviewItem>
                </Overview>
                <Overview>
                    {infoData?.description}
                </Overview>
                <Overview>
                <OverviewItem>
                        <span>total supply</span>
                        <span>{tickersData?.total_supply}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>max supply</span>
                        <span>{tickersData?.max_supply}</span>
                    </OverviewItem>
                </Overview>
                <Tabs>
                    <Tab isActive={isPrice != null}>
                        <Link to={`/${id}/price`}>price</Link>
                    </Tab>
                    <Tab isActive={isChart != null}>
                        <Link to={`/${id}/chart`}>chart</Link>
                    </Tab>
                </Tabs>
                <Switch>
                    <Route path={`/${id}/price`}>
                        <Price />
                    </Route>
                    <Route path={`/${id}/chart`}>
                        <Chart coinId={id}/>
                    </Route>
                    <Route exact path={`/${id}`}>
                    </Route>
                </Switch>
            </BodyWrapper>
        )
    }

    const capitalizeTitle = (str:string) => str.replace(/-/g,' ').toLowerCase().replace(/\w/, val => val.toUpperCase());

    return(
        <Wrapper>
            <Helmet>
                <title>GoosTracker - {capitalizeTitle(id)}</title>
                <meta name="description" content={`This page displays detailed information about ${capitalizeTitle(id)}.`} />
            </Helmet>
            <Header>
                <Title>{state?.coinName ?? (isLoading ? "Loading..." : infoData?.name)}</Title>
            </Header>
            <PrevButton />
            {isLoading ? <LoadingWrapper><LoadingImage src={loadingImg}/></LoadingWrapper> : renderCoinInfo()}
        </Wrapper>
    );
}

export default memo(CoinDetail);
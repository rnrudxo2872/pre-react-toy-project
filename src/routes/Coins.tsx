import { memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import { CoinInterface } from "../interfaces/Coins.interface";
import { Coin, CoinList, Header, Title, Wrapper, Img } from "../styledComponets/Coins.styled";
import { LoadingImage, LoadingWrapper } from "../styledComponets/Loading.styled";
import loadingImg from "../loading-img.png"
import { useQuery } from "react-query";
import { fetchCoinAPI } from "../api";

function Coins () {
    const {isLoading, error, data:coins} = useQuery<CoinInterface[]>("allCoins", fetchCoinAPI.bind("coins"))

    if(error) throw new Error("fetch data error!");

    const renderCoins = () => coins?.slice(0,100).map((coin,index) => 
        <Coin key={coin.id}>
            <Link to={{
                    pathname:`/${coin.id}`,
                    state:{
                        coinId:coin.id,
                        coinSymbol:coin.symbol,
                        coinName:coin.name,
                        coinRank:coin.rank
                    }
                }}>
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />{coin.name}
            </Link>
        </Coin>)
    return (
        <Wrapper>
            <Helmet>
                <title>GoosTracker - Coins</title>
                <meta name="description" content="GoosTracker introduces coins!" />
            </Helmet>
            <Header>
                <Title>코인 살펴보기</Title>
            </Header>
            {isLoading ? (<LoadingWrapper><LoadingImage src={loadingImg}/></LoadingWrapper>) : (
            <CoinList>
                {renderCoins()}   
                </CoinList>
                )
            }
            
        </Wrapper>
    )
}
 
export default memo(Coins);
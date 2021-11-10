import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinInterface } from "../interfaces/Coins.interface";
import { Coin, CoinList, Header, Title, Wrapper, Img } from "../styledComponets/Coins.styled";
import { LoadingImage, LoadingWrapper } from "../styledComponets/Loading.styled";
import loadingImg from "../loading-img.png"

function Coins () {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const data:CoinInterface[] = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
            setCoins(data.slice(0,150));
            setLoading(false);
        })()
    },[])

    const renderCoins = () => coins.map((coin,index) => 
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
            <Header>
                <Title>코인 살펴보기</Title>
            </Header>
            {loading ? (<LoadingWrapper><LoadingImage src={loadingImg}/></LoadingWrapper>) : (
            <CoinList>
                {renderCoins()}   
                </CoinList>
                )
            }
            
        </Wrapper>
    )
}
 
export default memo(Coins);
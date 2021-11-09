import { memo, useEffect, useState } from "react";
import { CoinInterface } from "../interfaces/Coins.interface";
import { Coin, CoinList, Header, Title, Wrapper } from "../styledComponets/Coins.styled";

function Coins () {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const data:CoinInterface[] = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
            setCoins(data.slice(0,20));
            setLoading(false);
        })()
    },[])
    return (
        <Wrapper>
            <Header>
                <Title>코인 살펴보기</Title>
            </Header>
            {loading ? ("Loading...") : (
            <CoinList>
                {
                coins.map((coin,index) => 
                    <Coin key={coin.id}>
                        {coin.name}
                    </Coin>
                    )
                }
                </CoinList>
                )
            }
        </Wrapper>
    )
}
 
export default memo(Coins);
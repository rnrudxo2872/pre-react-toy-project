import { memo, useEffect, useState } from "react";
import styled from "styled-components"
import { CoinInterface } from "../interfaces/Coins.interface";

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 480px;
`
const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: ${(props) => props.theme.titleColor};
`
const CoinList = styled.ul``;
const Coin = styled.li`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 8px;
`

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
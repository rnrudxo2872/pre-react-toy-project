import { memo } from "react"
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { ChartProps, OHLC } from "../interfaces/Chart.interface";

function Chart({coinId}:ChartProps) {
    const {isLoading, error, data} = useQuery<OHLC[]>(["ohlc",coinId], () => fetchCoinHistory(coinId));
    
    if(error) throw new Error("fetch data error");
    
    return (
        <h1>{isLoading ? "Loading..." : "chart!!!"}</h1>
    )
}

export default memo(Chart);
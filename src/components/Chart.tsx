import { memo } from "react"
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { ChartProps, OHLC } from "../interfaces/Chart.interface";
import ApextChart from "react-apexcharts"

function Chart({coinId}:ChartProps) {
    const {isLoading, error, data} = useQuery<OHLC[]>(["ohlc",coinId], () => fetchCoinHistory(coinId));
    
    if(error) throw new Error("fetch data error");
    console.log(data)
    function getChart() {
        const options:ApexCharts.ApexOptions = {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            theme: {
                mode:"dark"
            }
        }
        const series = [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        
        return (
            <ApextChart height={400} width={480} options={options} series={series} />
        )
    }

    return (
        <h1>{isLoading ? "Loading..." : getChart()}</h1>
    )
}

export default memo(Chart);
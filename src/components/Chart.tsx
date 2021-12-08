import { memo } from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { ChartProps, OHLC } from "../interfaces/Chart.interface";
import ApextChart from "react-apexcharts";

function Chart({ coinId }: ChartProps) {
  const { isLoading, error, data } = useQuery<OHLC[]>(["ohlc", coinId], () =>
    fetchCoinHistory(coinId)
  );

  if (error) throw new Error("fetch data error");

  function getChart() {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: "candlestick",
        id: "basic-bar",
      },
      title: {
        text: `${coinId.toUpperCase()} Chart`,
        align: "left",
      },
      xaxis: {
        labels: {
          show: false,
        },
        type: "datetime",
        categories: data?.map((val) => val.time_close),
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          formatter: (val) => val.toFixed(0),
        },
      },
      theme: {
        mode: "dark",
      },
      tooltip: {
        y: {
          formatter: (value) => `$ ${value.toFixed(2)}`,
        },
      },
    };
    const series = [
      {
        data: data?.map((val) => {
          return {
            x: val.time_close,
            y: [
              val.open.toFixed(2),
              val.high.toFixed(2),
              val.low.toFixed(2),
              val.close.toFixed(2),
            ],
          };
        }),
      },
    ];

    return (
      <ApextChart
        height={400}
        width={480}
        options={options}
        series={series}
        type="candlestick"
      />
    );
  }

  return <h1>{isLoading ? "Loading..." : getChart()}</h1>;
}

export default memo(Chart);

import { useProps } from "../../components/CoinPage/CoinPage";
import ReactApexCharts from "react-apexcharts";
import { Loader, LoadText } from "../../styles/Global/globalLayout";
import { IChartInfoType } from "../../interfaces/type";

function Price() {
  const { chartLoad, chartData } = useProps();
  const form = (value: number): number => {
    return parseFloat(value.toFixed(3));
  }
  const ohlc = (data: IChartInfoType) => {
    return [new Date(data.time_open).getTime(), [form(data.open), form(data.high), form(data.low), form(data.close)]];
  }
  return (
    <>
      {
        chartLoad
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : <ReactApexCharts
            type='candlestick'
            series={[
              {
                data: chartData?.map(item => ohlc(item)) as any // 타입지정 해주기.
              },
            ]}
            options={{
              grid: {
                position: 'front',
                xaxis: {
                  lines: {
                    show: false
                  }
                },
                yaxis: {
                  lines: {
                    show: false
                  }
                }
              },
              xaxis: {
                axisTicks: { show: false },
                axisBorder: { show: false },
                labels: {
                  formatter: (value) => `${new Date(value)}`,
                  show: false
                }
              },
              yaxis: {
                show: false
              },
              tooltip: {
                y: {
                  formatter: (value) => `$ ${value.toFixed(3)}`
                }
              },
              theme: {
                mode: 'dark',
                palette: 'palette1'
              },
              chart: {
                width: 'inherit',
                height: 'inherit',
                background: 'inherit',
                toolbar: {
                  show: false
                }
              },
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: '#0F9895',
                    downward: '#DCDDE1'
                  }
                }
              },
            }}
          />
      }
    </>
  )
}
export default Price;
import { useProps } from "../../components/CoinPage/CoinPage";
import ReactApexCharts from "react-apexcharts";
import { Loader, LoadText } from "../../styles/Global/globalLayout";
import { IChartInfoType } from "../../interfaces/type";

function Price() {
  const { chartLoad, chartData } = useProps();
  const ohlc = (data: IChartInfoType) => {
    return [new Date(data.time_open).getTime(), data.open, data.high, data.low, data.close];
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
                categories: chartData?.map(item => item.time_open)// 동작안함. 수정해야함
              },
              yaxis: {
                show: false
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
              tooltip: {
                y: {
                  // formatter: (value) => `$ ${value.toFixed(3)}` => 수정해야함 동작 안함
                }
              },
            }}
          />
      }
    </>
  )
}
export default Price;
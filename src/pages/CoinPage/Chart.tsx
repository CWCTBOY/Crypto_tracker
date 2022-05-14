import { useProps } from "../../components/CoinPage/CoinPage";
import ReactApexCharts from "react-apexcharts";
import { Loader, LoadText } from "../../styles/Global/globalLayout";

const date = new Date().getDate();
const month = new Date().getMonth();
const calendar = (i: number) => {
  if (date - i < 0) {
    return month;
  } else {
    return month + 1;
  }
}

function Chart() {
  const { chartLoad, chartData } = useProps();
  let dateData: string[] = [];
  for (let i = 0; i < chartData!.length; i++) {
    dateData.push(`${calendar(i)} / ${date - 9 + i}`)
  }
  return (
    <>
      {
        chartLoad
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : <ReactApexCharts
            type='line'
            series={[
              {
                name: 'highest',
                data: chartData?.map(item => item.high) as number[],
              },
              {
                name: 'lowest',
                data: chartData?.map(item => item.low) as number[],
              }
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
                categories: chartData?.map(item => item.time_open)
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
              stroke: {
                curve: 'smooth',
                colors: ['#0F9895', '#DCDDE1'],
                width: 2
              },
              fill: {
                type: 'gradient',
                gradient: {
                  opacityFrom: 0.8,
                  opacityTo: 0.9,
                  stops: [0, 100]
                }
              },
            }}
          />
      }
    </>
  )
}
export default Chart;

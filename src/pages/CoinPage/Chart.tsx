import { useProps } from "../../components/CoinPage/CoinPage";
import ReactApexCharts from "react-apexcharts";
import { Loader, LoadText } from "../../styles/Global/globalLayout";

interface IChartType {
  series: {
    name: string;
  }[];
  options: {
    chart: {
      type: string;
      height: string | number;
    },
    dataLabels: {
      enabled: boolean;
    },
    stroke: {
      curve: string;
    },
    xaxis: {
      type: string;
      categories: string[];
    },
    tooltip: {
      x: {
        format: string;
      }
    }
  }
}
function Chart() {
  const { chartLoad, chartData } = useProps();
  console.log(chartData?.map(item => item.high));//temporary
  const chartInfo = {
    series: [
      {
        name: 'high',
        data: chartData?.map(item => item.high) as number[]
      },
      {
        name: 'low',
        data: chartData?.map(item => item.low) as number[]
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: '100%'
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      },
    }
  }
  return (
    <>
      {
        chartLoad
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : <ReactApexCharts
            type='area'
            series={[
              {
                name: 'high',
                data: chartData?.map(item => item.high) as number[]
              },
              {
                name: 'low',
                data: chartData?.map(item => item.low) as number[]
              }
            ]}
            options={{
              theme: {
                mode: 'dark',
                palette: 'palette1'
              },
              chart: {
                width: 500,
                height: 500
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: 'smooth',
                colors: ['#546E7A', '#E91E63'],
                width: 1
              },
              yaxis: {
                show: false,
              },
            }}//내일 차트라이브러리 좀 꾸미기
          />
      }
    </>
  )
}
export default Chart;

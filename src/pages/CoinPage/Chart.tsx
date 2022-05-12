import { useProps } from "../../components/CoinPage/CoinPage";
import ReactApexCharts from "react-apexcharts";
import { Loader, LoadText } from "../../styles/Global/globalLayout";

interface IData {
  x: string | null;
  y: string | null;
}
const date = new Date().getDate();
const month = new Date().getMonth();
const calendar = (i: number) => {
  if (date - i < 0) {
    return (month - 1);
  } else {
    return month;
  }
}
function Chart() {
  const { chartLoad, chartData } = useProps();
  let highData: IData[] = [];
  let lowData: IData[] = [];
  let highest: IData = { x: '', y: '' };
  let lowest: IData = { x: '', y: '' };
  for (let i = 0; i < chartData!.length; i++) {
    highest.x = `${calendar(i) + 1} / ${date - chartData!.length + i + 1}`;
    highest.y = `${chartData![i].high}`;
    highData.push(highest);
    highest = { x: '', y: '' };
  }
  for (let i = 0; i < chartData!.length; i++) {
    lowest.x = `${calendar(i) + 1} / ${date - chartData!.length + i + 1}`;
    lowest.y = `${chartData![i].low}`;
    lowData.push(lowest);
    lowest = { x: '', y: '' };
  }
  console.log(highData, lowData, date);
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
                data: highData
              },
              {
                name: 'lowest',
                data: lowData
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
                background: 'inherit'
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

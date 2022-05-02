import { useProps } from "../../components/CoinPage/coinpage";
import { Loader, LoadText } from "../../styles/Global/GlobalLayout";

function Chart() {
  const { chartLoad, chartData } = useProps();//custom hook
  return (
    <>
      {
        chartLoad
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : (
            null
          )
      }
    </>
  )
}
export default Chart;
//https://api.coinpaprika.com/v1/coins/btc-bitcoin

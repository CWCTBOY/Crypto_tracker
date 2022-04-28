import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { chartFetcher } from "../../api";
import { IChartInfoType } from "../../type";


function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IChartInfoType[]>(['chart', coinId], () => chartFetcher(coinId!))
  return (
    <h1>chart</h1>
  )
}
export default Chart
//https://api.coinpaprika.com/v1/coins/btc-bitcoin

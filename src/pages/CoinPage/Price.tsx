import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { priceFetcher } from "../../api";
import { IPriceInfoType } from "../../type";



function Price() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IPriceInfoType[]>(['price', coinId], () => priceFetcher(coinId!))
  return (
    <h1>price</h1>
  )
}// 인터페이스 작성완료, 데이터 바인딩 하고 UI만들기
export default Price
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
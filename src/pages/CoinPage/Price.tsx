import { useProps } from "../../components/CoinPage/coinpage";
import { Loader, LoadText } from "../../styles/Global/GlobalLayout";

function Price() {
  const { priceLoad, priceData } = useProps();
  return (
    <>
      {
        priceLoad
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : (
            null
          )
      }
    </>
  )
}// 인터페이스 작성완료, 데이터 바인딩 하고 UI만들기
export default Price
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
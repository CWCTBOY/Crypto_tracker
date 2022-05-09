import { useProps } from "../../components/CoinPage/CoinPage";
import { Loader, LoadText } from "../../styles/Global/globalLayout";

function Price() {
  const { priceLoad, priceData } = useProps();
  console.log(priceData);
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
}
export default Price
//https://api.coinpaprika.com/v1/tickers/btc-bitcoin
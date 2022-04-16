import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

interface IChartInfo {

}

function Chart() {
  const { coinId } = useParams();
  const [chartinfo, setChartinfo] = useState();
  useEffect(() => {
    (async () => {
      const request = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
    })()
  }, [])
  return (
    <h1>chart</h1>
  )
}//request 인터페이스 작성하기부터 시작
export default Chart
//https://api.coinpaprika.com/v1/coins/btc-bitcoin

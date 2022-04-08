import { CoinBox, Name } from "../../styles/Pages/Coinpages";
import { ICoinInfo } from '../../pages/CoinPage'
interface ICoin {
  coininfo?: ICoinInfo;
  load: boolean;
}

function Coin({ coininfo, load }: ICoin) {
  return (
    <CoinBox>
      <Name>{coininfo?.name}</Name>
    </CoinBox>
  )//여기서부터 다시 빌드
}
export default Coin;
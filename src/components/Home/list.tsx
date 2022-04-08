import { ICoinData } from "../../pages/Home";
import { Link } from "react-router-dom";
import { Coin, ListBox, CoinImg } from "../../styles/Home/CoinList";
import { Loader, LoadText } from '../../styles/Global/GlobalLayout';

interface IListData {
  coindata?: ICoinData[];
  load: boolean;
}

function List({ coindata, load }: IListData) {
  return (
    <ListBox>
      {
        !load
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : (
            coindata?.map(item => (
              <Link to={`/${item.id}`}>
                <Coin key={item.id}>
                  <CoinImg src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${item.name.toLowerCase().split(" ").join("-")}.png`} />
                  {item.symbol} &rarr; {item.id}
                </Coin>
              </Link>
            )
            )
          )
      }
    </ListBox>
  )
}
export default List;
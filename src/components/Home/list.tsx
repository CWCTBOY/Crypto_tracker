import { Link } from "react-router-dom";
import { Coin, ListBox, CoinImg } from "../../styles/Home/coinList";
import { Loader, LoadText } from '../../styles/Global/globalLayout';
import { IListType } from "../../interfaces/type";

function List({ coindata, isLoading }: IListType) {
  return (
    <ListBox>
      {
        isLoading
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
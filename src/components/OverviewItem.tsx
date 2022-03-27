//Reacts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Interfaces
import { ICoinIdType, IInfoData, IPriceData } from '../interfaces/CoinPageInterface';
//Styles
import { Overview, OverviewList, Item } from '../styles/OverviewStyle';
import { Loader } from '../styles/HomeStyle';

export function OverviewItem() {
  const [infodata, setInfodata] = useState<IInfoData>();
  const [pricedata, setPricedata] = useState<IPriceData>();
  const [load, setLoad] = useState(true);
  const { coinId } = useParams<ICoinIdType>();
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      setInfodata(infoData);
      setPricedata(priceData);
      setLoad(false);
    })();
  }, [])
  return (
    <Overview>
      {
        load
          ? <Loader>Loading...</Loader>
          : (
            <>
              <OverviewList>
                <Item>
                  <span>Rank :</span>
                  <span>{infodata?.rank}</span>
                </Item>
                <Item>
                  <span>Symbol :</span>
                  <span>{infodata?.symbol}</span>
                </Item>
                <Item>
                  <span>Started :</span>
                  <span>{infodata?.started_at.slice(0, 4)}</span>
                </Item>
              </OverviewList>
              <p>{infodata?.description}</p>
              <OverviewList>
                <Item>
                  <span>circ_supp :</span>
                  <span>{pricedata?.circulating_supply}</span>
                </Item>
                <Item>
                  <span>Price :</span>
                  <span>{pricedata?.quotes.USD.price.toString().slice(0, 12)}</span>
                </Item>
              </OverviewList>
            </>
          )
      }
    </Overview>
  )
}
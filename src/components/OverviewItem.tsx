//Reacts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Interfaces
import { IInfoData, IPriceData, ICoinIdType } from '../interfaces/CoinPageInterface';
//Styles
import { Overview, OverviewList, Item } from '../styles/OverviewStyle';
import { Title } from '../styles/HomeStyle';
import { Loader } from '../styles/HomeStyle';

export function OverviewItem(props: ICoinIdType) {
  const [infodata, setInfodata] = useState<IInfoData>();
  const [pricedata, setPricedata] = useState<IPriceData>();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${props.coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${props.coinId}`)).json();
      setInfodata(infoData);
      setPricedata(priceData);
      setLoad(false);
    })();
  }, [])
  return (
    <Overview>
      <Title as={`h2`}> <img src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${infodata?.name.toLowerCase().split(" ").join("-")}.png`} style={{ margin: '0 5px 0 0' }} />{infodata?.symbol}</Title>
      {
        load
          ? <Loader>Loading...</Loader>
          : (
            <>
              <OverviewList>
                <Item>
                  <span>Ran k :</span>
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
              <p>{`${infodata?.description.slice(0, 200)}...`}</p>
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
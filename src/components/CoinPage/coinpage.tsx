import { CoinBox, InfoBox, InfoWrapper, Name, Info, CoinDescription, BtnWrapper, NestedBtn } from "../../styles/Pages/Coinpages";
import { ICoinInfo } from '../../pages/CoinPage'
import { Loader, LoadText } from "../../styles/Global/GlobalLayout";
import { Link, Outlet } from "react-router-dom";

export interface ICoin {
  coininfo?: ICoinInfo;
  load: boolean;
  coinId?: string;
}

function Coin({ coininfo, load, coinId }: ICoin) {
  return (
    <CoinBox>
      <Name>{coininfo?.name}</Name>
      {
        !load
          ? <Loader><LoadText>Loading...</LoadText></Loader>
          : (
            <>
              <InfoWrapper>
                <InfoBox>
                  <Info>Rank :</Info>
                  <Info>{coininfo?.rank}</Info>
                </InfoBox>
                <InfoBox>
                  <Info>Symbol :</Info>
                  <Info>{coininfo?.symbol}</Info>
                </InfoBox>
                <InfoBox>
                  <Info>Type :</Info>
                  <Info>{coininfo?.type}</Info>
                </InfoBox>
              </InfoWrapper>
              <CoinDescription>
                {
                  coininfo!.description.length > 200
                    ? `${coininfo?.description.slice(0, 200)}...`
                    : coininfo?.description
                }
              </CoinDescription>
              <InfoWrapper>
                <InfoBox>
                  <Info>Active :</Info>
                  <Info>{String(coininfo?.is_active)}</Info>
                </InfoBox>
                <InfoBox>
                  <Info>Hash :</Info>
                  <Info>
                    {
                      coininfo!.hash_algorithm.length > 10
                        ? `${coininfo?.hash_algorithm.slice(0, 10)}..`
                        : coininfo?.hash_algorithm
                    }
                  </Info>
                </InfoBox>
              </InfoWrapper>
              <BtnWrapper>
                <Link to={`/${coinId}/price`}>
                  <NestedBtn>Price</NestedBtn>
                </Link>
                <Link to={`/${coinId}/chart`}>
                  <NestedBtn>Chart</NestedBtn>
                </Link>
              </BtnWrapper>
              <Outlet />
            </>
          )
      }
    </CoinBox>
  )
}
export default Coin;
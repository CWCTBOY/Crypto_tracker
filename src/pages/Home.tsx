import { useQuery } from "react-query";
import { coinFetcher } from "../api";
import Seo from "../components/common/Seo";
import List from "../components/Home/List";
import { ICoinType } from "../interfaces/type";

function Home() {
  const { isLoading, data } = useQuery<ICoinType[]>('coinData', coinFetcher);
  return (
    <>
      <Seo match="Home" />
      <List coindata={data} isLoading={isLoading} />
    </>
  )
}
export default Home;
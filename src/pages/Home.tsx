import { useQuery } from "react-query";
import { coinFetcher } from "../api";
import List from "../components/Home/list";
import { ICoinType } from "../interfaces/type";

function Home() {
  const { isLoading, data } = useQuery<ICoinType[]>('coinData', coinFetcher);
  return (
    <List coindata={data} isLoading={isLoading} />
  )
}
export default Home;
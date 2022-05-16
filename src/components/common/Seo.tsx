import { Helmet } from "react-helmet";
function Seo({ match }: { match: string }) {
  return (
    <Helmet>
      <title>{`CoinTracker | ${match}`}</title>
    </Helmet>
  )
};
export default Seo;
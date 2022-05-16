import Seo from "./components/common/Seo";
import Router from "./Router";
import { GlobalLayout } from "./styles/Global/globalLayout";
// import { ReactQueryDevtools } from 'react-query/devtools';
function App() {
  return (
    <>
      <GlobalLayout />
      <Router />
    </>
  )
}

export default App;
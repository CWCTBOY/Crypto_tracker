import Router from "./Router";
import { GlobalLayout } from "./styles/Global/GlobalLayout";
import { ResetStyle } from "./styles/Global/Reset";
function App() {
  return (
    <>
      <ResetStyle />
      <GlobalLayout>
        <Router />
      </GlobalLayout>
    </>
  )
}

export default App;
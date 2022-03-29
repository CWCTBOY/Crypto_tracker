//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//components
import Home from './routes/Home';
import CoinPage from './routes/CoinPage';

function BrowserRouters() {
  return (
    <Router>
      <Switch>
        <Route path='/:coinId' component={CoinPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router >
  );
}
export default BrowserRouters;
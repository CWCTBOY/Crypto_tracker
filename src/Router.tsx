//React
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//components
import Home from './routes/Home';
import Coin from './routes/Coin';

function BrowserRouters() {
  return (
    <Router>
      <Switch>
        <Route path='/:coinId' component={Coin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router >
  );
}
export default BrowserRouters;
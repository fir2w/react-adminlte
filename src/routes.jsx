import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';

import App from './components/app';
import Index from './pages/index';
import Orders from './pages/orders/orders';
import Users from './pages/users/users';
import CreditratingMgt from './pages/creditrating/creditratingMgt';

var routes = (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/creditratingMgt" component={CreditratingMgt}/>
          <Route path="/users" component={Users}>
          </Route>
      </Route>
  </Router>
);



export default routes;

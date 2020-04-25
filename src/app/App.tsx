import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import CustomerPage from '../features/Customer/CustomerPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/:userId">
        <CustomerPage />
      </Route>
    </Switch>
  </Router>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

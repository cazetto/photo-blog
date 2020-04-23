import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import UserPage from './features/User/UserPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/:userId">
        <UserPage />
      </Route>
    </Switch>
  </Router>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

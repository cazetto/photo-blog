import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
} from 'force-components';
import CustomerPage from '../features/Customer/CustomerPage';
import Header from './Header';

const GlobalStyle = <PrimerGlobalStyle />;

const App = () => {
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={GlobalStyle}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <CustomerPage />
          </Route>
          <Route path="/:userId">
            <CustomerPage />
          </Route>
        </Switch>
      </Router>
    </ForceThemeProvider>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

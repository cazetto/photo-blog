import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { css } from 'styled-components';

import {
  ForceThemeProvider,
  themePrimer,
  extendPrimerGlobalStyle,
} from 'force-components';
import CustomerPage from '../features/Customer/CustomerPage';
import Header from './Header';

const PrimerCustomGlobalStyle = extendPrimerGlobalStyle(css`
  html,
  body,
  #root {
    height: 100%;
  }
`);

const App = () => {
  return (
    <ForceThemeProvider
      theme={themePrimer}
      globalStyle={<PrimerCustomGlobalStyle />}
    >
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

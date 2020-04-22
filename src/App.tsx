import React from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => (
  <>
    <input type="text" />
    <div>Hello World!</div>
  </>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

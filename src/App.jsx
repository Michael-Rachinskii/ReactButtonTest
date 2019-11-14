import React from 'react';

import Button from './components/Button';

import AppStyle from './App.module.css';

const App = () => (
  <div className={AppStyle.App}>
    <Button text="12345" variants="ghost" fullWidth />
  </div>
);

export default App;

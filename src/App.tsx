/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'stores/store';


import HomeController from 'ui/screens/home/HomeController';

type Props = {};

const App: React.FC<Props> = () => {
  return <Provider store={store}>
    <HomeController />
  </Provider>;
};
export default App;

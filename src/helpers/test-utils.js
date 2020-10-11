import { configureStore } from '@reduxjs/toolkit';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import reducer from '../app/carsSlice';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

export const makeStore = () => {
  return configureStore({ reducer });
};
const history = createMemoryHistory();

const wrapComponent = (Component, store, props = {}) => {
  return (
    <Provider store={store || makeStore()}>
      <Router history={history}>
        <Component {...props} />
      </Router>
    </Provider>
  );
};

export default wrapComponent;

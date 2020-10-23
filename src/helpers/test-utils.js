import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import carsReducer, { initialState } from '../app/carsSlice';

export const wrappedComponent = (ui, mockState) => {
  const state = mockState || initialState;

  const store = configureStore({
    reducer: {
      cars: carsReducer
    },
    preloadedState: { cars: state }
  });
  return ([(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>), store]
  );
};
// re-export everything
export * from '@testing-library/react';

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import carsReducer, { initialState } from '../app/carsSlice';

// const Wrapper = ({ children }) => {
//   return (
//     <Provider store={store}>
//       <MemoryRouter>{children}</MemoryRouter>
//     </Provider>
//   );ğ
// };

// const customRender = (ui, mockState, options) => {
//   const state = mockState || initialState;
//   const store = configureStore({
//     reducer: {
//       cars: carsReducer
//     },
//     preloadedState: { cars: mockState }
//   });
//   const Wrapper = ({ children }) => {
//     return (
//       <Provider store={store}>
//         <MemoryRouter>{children}</MemoryRouter>
//       </Provider>
//     );
//   };
//   return render(ui, { wrapper: Wrapper, ...options });

//   // render(
//   //   <Provider store={store}>
//   //     <MemoryRouter>{ui}</MemoryRouter>
//   //   </Provider>, ...options);
// };

export const wrappedComponent = (ui, mockState) => {
  const state = mockState || initialState;

  const store = configureStore({
    reducer: {
      cars: carsReducer
    },
    preloadedState: { cars: state }
  });
  return ([(<Provider store={store}>
    <MemoryRouter>{ui}</MemoryRouter>
  </Provider>), store]
  );
};
// re-export everything
export * from '@testing-library/react';

// override render method
// export { customRender as render };

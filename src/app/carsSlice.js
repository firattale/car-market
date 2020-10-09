import { createSlice } from '@reduxjs/toolkit';
import { fetchColors, fetchManufacturers, fetchCars } from './asyncActions';

export const initialState = {
  colors: [],
  manufacturers: [],
  cars: {
    cars: [],
    totalPageCount: null,
    totalCarsCount: null,
    loading: false
  },
  error: null
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchColors.fulfilled]: (state, action) => {
      state.colors.push(action.payload.colors);
    },
    [fetchColors.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
    },
    [fetchManufacturers.fulfilled]: (state, action) => {
      state.manufacturers.push(action.payload.manufacturers);
    },
    [fetchManufacturers.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
    },
    [fetchCars.pending]: (state, action) => {
      state.cars.loading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = { ...action.payload, loading: false };
    },
    [fetchCars.rejected]: (state) => {
      state.cars.loading = false;
      state.error = 'Something went wrong! Please refresh the page.';
    }
  }
});

export const selectError = state => state.cars.error;
export const selectColors = state => state.cars.colors;
export const selectManufacturers = state => state.cars.manufacturers;
export const selectCars = state => state.cars.cars;

export default carsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchColors, fetchManufacturers, fetchCars } from './asyncActions';

export const initialState = {
  colors: [],
  manufacturers: [],
  cars: {
    cars: [],
    totalPageCount: 100,
    totalCarsCount: 1000,
    loading: false
  },
  currentPage: 1,
  manufacturer: null,
  color: null,
  error: null
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage++;
    },
    decrementPage: (state) => {
      state.currentPage--;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeManufacturer: (state, action) => {
      state.manufacturer = action.payload;
    }
  },
  extraReducers: {
    [fetchColors.fulfilled]: (state, action) => {
      state.colors = action.payload.colors;
    },
    [fetchColors.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
    },
    [fetchManufacturers.fulfilled]: (state, action) => {
      state.manufacturers = action.payload.manufacturers;
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

export const { incrementPage, decrementPage, changePage, changeColor, changeManufacturer } = carsSlice.actions;

export const selectError = state => state.cars.error;
export const selectColors = state => state.cars.colors;
export const selectManufacturers = state => state.cars.manufacturers;
export const selectCars = state => state.cars.cars;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectManufacturer = state => state.cars.manufacturer;
export const selectColor = state => state.cars.color;

export default carsSlice.reducer;

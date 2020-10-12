import { createSlice } from '@reduxjs/toolkit';
import { fetchColors, fetchManufacturers, fetchCars, fetchCarDetail } from './asyncActions';

export const initialState = {
  colors: {
    data: [],
    isLoaded: false
  },
  manufacturers: {
    data: [],
    isLoaded: false
  },
  cars: {
    data: [],
    totalPageCount: 100,
    totalCarsCount: 1000,
    loading: false,
    isLoaded: false
  },
  carDetail: {},
  currentPage: 1,
  manufacturer: null,
  sorting: null,
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
    },
    changeSorting: (state, action) => {
      state.sorting = action.payload;
    },
    clearCarDetail: (state) => {
      state.carDetail = {};
    }
  },
  extraReducers: {
    [fetchColors.fulfilled]: (state, action) => {
      state.colors.data = action.payload.colors;
      state.colors.isLoaded = true;
    },
    [fetchColors.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
      state.colors.isLoaded = true;
    },
    [fetchManufacturers.fulfilled]: (state, action) => {
      state.manufacturers.data = action.payload.manufacturers;
      state.manufacturers.isLoaded = true;
    },
    [fetchManufacturers.rejected]: (state) => {
      state.error = 'Something went wrong! Please refresh the page.';
      state.manufacturers.isLoaded = false;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars.data = action.payload.cars;
      state.cars.totalCarsCount = action.payload.totalCarsCount;
      state.cars.totalPageCount = action.payload.totalPageCount;
      state.cars.isLoaded = true;
    },
    [fetchCars.rejected]: (state) => {
      state.cars.data = [];
      state.cars.isLoaded = false;
      state.error = 'Something went wrong! Please refresh the page.';
    },
    [fetchCarDetail.fulfilled]: (state, action) => {
      state.carDetail = action.payload.car;
    },
    [fetchCarDetail.rejected]: (state) => {
      state.carDetail.data = {};
      state.error = 'Something went wrong! Please refresh the page.';
    }
  }
});

export const { incrementPage, decrementPage, changePage, changeColor, changeManufacturer, clearCarDetail, changeSorting } = carsSlice.actions;

export const selectError = state => state.cars.error;
export const selectColors = state => state.cars.colors;
export const selectManufacturers = state => state.cars.manufacturers;
export const selectCars = state => state.cars.cars;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectManufacturer = state => state.cars.manufacturer;
export const selectCarDetail = state => state.cars.carDetail;
export const selectColor = state => state.cars.color;
export const selectSorting = state => state.cars.sorting;

export default carsSlice.reducer;

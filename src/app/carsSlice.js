import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api/api';

export const initialState = {
  colors: [],
  manufacturers: [],
  error: null
};

export const fetchColors = createAsyncThunk(
  'cars/fetchColors',
  async (userId, thunkAPI) => {
    const response = await api().get('/colors');
    return response.data;
  }
);
export const fetchManufacturers = createAsyncThunk(
  'cars/fetchManufacturers',
  async (userId, thunkAPI) => {
    const response = await api().get('/manufacturers');
    return response.data;
  }
);

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    // changeFirstCurrency: (state, action) => {
    //   const { first, firstSign } = action.payload;
    //   state.firstCurrency = first;
    //   state.firstSign = firstSign;
    // },
    // changeSecondCurrency: (state, action) => {
    //   const { second, secondSign } = action.payload;
    //   state.secondCurrency = second;
    //   state.secondSign = secondSign;
    // },
    // changeCurrencyRate: (state, action) => {
    //   state.currencyRate = action.payload;
    // }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchColors.fulfilled]: (state, action) => {
      // Add user to the state array
      state.colors.push(action.payload);
    },
    [fetchColors.rejected]: (state, action) => {
      // Add user to the state array
      state.error = 'Something went wrong! Please refresh the page.';
    },
    [fetchManufacturers.fulfilled]: (state, action) => {
      // Add user to the state array
      state.manufacturers.push(action.payload);
    },
    [fetchManufacturers.rejected]: (state, action) => {
      // Add user to the state array
      state.error = 'Something went wrong! Please refresh the page.';
    }
  }
});

// export const { changeFirstCurrency, changeSecondCurrency, changeCurrencyRate } = carsSlice.actions;

export const selectError = state => state.cars.error;

export default carsSlice.reducer;

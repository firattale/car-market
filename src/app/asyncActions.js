import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchColors = createAsyncThunk(
  'cars/fetchColors',
  async () => {
    const response = await api().get('/colors');
    return response.data;
  }
);
export const fetchManufacturers = createAsyncThunk(
  'cars/fetchManufacturers',
  async () => {
    const response = await api().get('/manufacturers');
    return response.data;
  }
);
export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (params) => {
    const response = await api().get('/cars', {
      params
    });
    return response.data;
  }
);

export const fetchCarDetail = createAsyncThunk(
  'cars/fetchCarDetail',
  async (stockNumber) => {
    const response = await api().get(`/cars/${stockNumber}`);
    return response.data;
  }
);

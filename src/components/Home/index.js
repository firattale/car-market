import React, { useEffect } from 'react';
import { fetchColors, fetchManufacturers, fetchCars } from '../../app/asyncActions';
import { selectColors, selectManufacturers } from '../../app/carsSlice';

import { useDispatch, useSelector } from 'react-redux';
import FilterForm from '../FilterForm';
import CarList from '../CarList';
import './index.css';

const Home = () => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColors);
  const manufacturers = useSelector(selectManufacturers);

  useEffect(() => {
    const params = {
      page: 1
    };
    !colors.isLoaded && dispatch(fetchColors());
    !manufacturers.isLoaded && dispatch(fetchManufacturers());
    dispatch(fetchCars(params));
  }, [dispatch, colors.isLoaded, manufacturers.isLoaded]
  );
  return <div className="home-content">
    <FilterForm/>
    <CarList/>
  </div>;
};

export default Home;

import React, { useEffect } from 'react';
import { fetchColors, fetchManufacturers, fetchCars } from '../../app/asyncActions';
import { selectColors, selectManufacturers, selectCars } from '../../app/carsSlice';
import { useDispatch, useSelector } from 'react-redux';
import FilterForm from '../FilterForm/FilterForm';
import CarList from '../CarList/CarList';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColors);
  const manufacturers = useSelector(selectManufacturers);
  const cars = useSelector(selectCars);

  useEffect(() => {
    const params = {
      page: 1
    };
    !colors.isLoaded && dispatch(fetchColors());
    !manufacturers.isLoaded && dispatch(fetchManufacturers());
    !cars.isLoaded && dispatch(fetchCars(params));
  }, []
  );
  return <div className="home-content">
    <FilterForm/>
    <CarList/>
  </div>;
};

export default Home;

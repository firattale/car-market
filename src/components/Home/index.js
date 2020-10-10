import React, { useEffect } from 'react';
import { fetchColors, fetchManufacturers, fetchCars } from '../../app/asyncActions';
import { useDispatch } from 'react-redux';
import FilterForm from '../FilterForm';
import CarList from '../CarList';
import './index.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      page: 1
    };
    dispatch(fetchColors());
    dispatch(fetchManufacturers());
    dispatch(fetchCars(params));
  }, [dispatch]
  );
  return <div className="home-content">
    <FilterForm/>
    <CarList/>
  </div>;
};

export default Home;

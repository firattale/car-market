import React, { useEffect } from 'react';
import { fetchColors, fetchManufacturers, fetchCars } from '../../app/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import FilterForm from '../../components/FilterForm/FilterForm';
import CarList from '../../components/CarList/CarList';
import './Home.scss';
import { selectColors, selectManufacturers, selectCars } from '../../app/selectors';

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

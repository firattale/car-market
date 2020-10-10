import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../app/carsSlice';
import CarCard from '../Card/Card';
import './index.css';
import Pagination from '../Pagination/Pagination';

const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <div className="d-flex flex-column w-75 p-4">
      <h1>Available Cars</h1>
      <p>Showing {cars.cars.length} of {cars.totalCarsCount} Results</p>
      {cars.cars.map(car => car && <CarCard key={car.mileage.number} car={car} />)}
      <Pagination/>
    </div>
  );
};

export default CarList;

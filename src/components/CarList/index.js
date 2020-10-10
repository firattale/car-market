import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../app/carsSlice';
import CarCard from '../Card/Card';
import './index.css';
import Pagination from '../Pagination/Pagination';
import Skeleton from 'react-loading-skeleton';

const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <div className="d-flex flex-column w-75 p-4">
      <h1>Available Cars</h1>
      <p>Showing {cars.data.length || 10} of {cars.totalCarsCount} Results</p>
      {cars.data.map(car => car.stockNumber ? <CarCard key={car.mileage.number} car={car} /> : <Skeleton height={100} width={100}/>)}
      <Pagination/>
    </div>
  );
};

export default CarList;

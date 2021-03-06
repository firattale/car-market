import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../Card/Card';
import './CarList.scss';
import Pagination from '../../commons/Pagination/Pagination';
import SkeletonCard from '../../commons/Skeleton/SkeletonCard';
import { selectCars } from '../../app/selectors';

const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <div className="list-container">
      <h1>Available Cars</h1>
      <p>Showing {cars.data.length || 10} of {cars.totalCarsCount} Results</p>
      <div>{cars.data.length > 0 ? cars.data.map(car => <CarCard key={`${car.mileage.number}-${car.stockNumber}`} car={car} />) : <SkeletonCard/> }</div>
      <Pagination/>
    </div>
  );
};

export default CarList;

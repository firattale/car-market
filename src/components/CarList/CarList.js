import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../app/carsSlice';
import CarCard from '../Card/Card';
import './CarList.scss';
import Pagination from '../Pagination/Pagination';
import SkeletonCard from '../../commons/Skeleton/SkeletonCard';
import { Card, CardGroup } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <div className="list-container">
      <h1>Available Cars</h1>
      <p>Showing {cars.data.length || 10} of {cars.totalCarsCount} Results</p>
      <CardGroup >
        <Card style={{ paddingBottom: '17.5px', paddingTop: '17.5px' }}>
          <Skeleton width={104} height={90} className="m-0"/>
          <Card.Body className="d-flex flex-column">
            <Skeleton width={95} height={28} className="m-0"/>
            <Skeleton width={170} height={28} className="m-0"/>
            <Skeleton width={100} height={28} className="m-0"/>
          </Card.Body>
        </Card>
      </CardGroup>
      <div>{cars.data.length > 0 ? cars.data.map(car => <CarCard key={car.mileage.number} car={car} />) : <SkeletonCard/> }</div>
      <Pagination/>
    </div>
  );
};

export default CarList;

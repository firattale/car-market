import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectCars } from '../../app/carsSlice';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const CarCard = ({ car: { stockNumber, pictureUrl, modelName, fuelType, mileage: { number }, color } }) => {
  // const cars = useSelector(selectCars);
  // console.log('loading', cars.loading);
  return (
    <CardGroup>
      <Card>
        { <img src={pictureUrl} className="card-image" alt="Car Logo"></img> || <Skeleton />}
        <Card.Body>
          <Card.Title><h1>{modelName}</h1></Card.Title>
          <Card.Text>Stock - # {stockNumber} - {number} KM - {fuelType} - {color}</Card.Text>
          <Card.Text><Link to={`details/${stockNumber}`} className="details">View Details</Link></Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CarCard;

CarCard.propTypes = {
  car: PropTypes.shape({
    color: PropTypes.string,
    mileage: PropTypes.shape({
      number: PropTypes.number
    }),
    fuelType: PropTypes.string,
    modelName: PropTypes.string,
    pictureUrl: PropTypes.string,
    stockNumber: PropTypes.number
  })
};

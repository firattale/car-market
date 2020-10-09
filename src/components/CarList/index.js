import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCars } from '../../app/carsSlice';
import { Link } from 'react-router-dom';
import './index.css';
const CarList = () => {
  const cars = useSelector(selectCars);
  const { totalCarsCount, totalPageCount } = cars;
  return (
    <div className="d-flex flex-column w-75 p-4">
      <h1>Available Cars</h1>
      <p>Showing {totalCarsCount / totalPageCount } of {cars.totalCarsCount} Results</p>
      {cars.cars.map(car => (
        <CardGroup key={car.stockNumber}>
          <Card>
            {/* <Card.Img src={car.pictureUrl} /> */}
            <img src={car.pictureUrl} className="card-image" alt="Car Logo"></img>
            <Card.Body>
              <Card.Title><h1>{car.modelName}</h1></Card.Title>
              <Card.Text>Stock - # {car.stockNumber} - {car.mileage.number} KM - {car.fuelType} - {car.color}</Card.Text>
              <Card.Text><Link to={`details/${car.stockNumber}`} className="details">View Details</Link></Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>)
      )}
      {/* <CardGroup>
        <Card>
          <Card.Img variant="right" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}
    </div>
  );
};

export default CarList;

import React from 'react';
import { Formik } from 'formik';
import { selectColors, selectManufacturers, changeColor, changeManufacturer } from '../../app/carsSlice';
import { fetchCars } from '../../app/asyncActions';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './index.css';

const FilterForm = () => {
  const dispatch = useDispatch();
  const colorOptions = useSelector(selectColors);
  const manuOptions = useSelector(selectManufacturers);
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          color: undefined,
          manufacturer: undefined
        }}
        onSubmit={async (values) => {
          dispatch(changeColor(values.color));
          dispatch(changeManufacturer(values.manufacturer));
          const params = { ...values, page: 1 };
          dispatch(fetchCars(params));
        }}
      >
        {({ handleSubmit, isSubmitting, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="color" onChange={handleChange}>
              <Form.Label>Color</Form.Label>
              <Form.Control as="select">
                <option value='' >All Car Colors</option>
                { colorOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="manufacturer" onChange={handleChange}>
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control as="select">
                <option value=''>All Manufacturers</option>
                {manuOptions.map(option => <option key={option.name} value={option.name}>{option.name}</option>)}
              </Form.Control>
            </Form.Group>
            <Button type="submit" className="form-button" size="small" disabled={isSubmitting}>Filter</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterForm;

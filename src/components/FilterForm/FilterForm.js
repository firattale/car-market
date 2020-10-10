import React from 'react';
import { Formik } from 'formik';
import { selectColors, selectManufacturers, changeColor, changeManufacturer } from '../../app/carsSlice';
import { fetchCars } from '../../app/asyncActions';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './FilterForm.css';
import { capitalize } from '../../helpers/helpers';

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
          dispatch(fetchCars({ ...values, page: 1 }));
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="color" onChange={handleChange}>
              <Form.Label>Color</Form.Label>
              <Form.Control as="select">
                <option value='' >All Car Colors</option>
                { colorOptions.data.map(option => <option key={option} value={option}>{capitalize(option)}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="manufacturer" onChange={handleChange}>
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control as="select">
                <option value=''>All Manufacturers</option>
                {manuOptions.data.map(option => <option key={option.name} value={option.name}>{option.name}</option>)}
              </Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-end"><Button type="submit" className="form-button" size="small">Filter</Button></div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterForm;

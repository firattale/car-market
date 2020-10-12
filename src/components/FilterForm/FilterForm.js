import React from 'react';
import { Formik } from 'formik';
import { changeColor, changeManufacturer, changeSorting, changePage } from '../../app/carsSlice';
import { fetchCars } from '../../app/asyncActions';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './FilterForm.scss';
import { capitalize } from '../../helpers/helpers';
import { selectColors, selectManufacturers, selectSorting, selectColor, selectManufacturer } from '../../app/selectors';

const FilterForm = () => {
  const dispatch = useDispatch();
  const colorOptions = useSelector(selectColors);
  const manuOptions = useSelector(selectManufacturers);
  const sort = useSelector(selectSorting);
  const color = useSelector(selectColor);
  const manufacturer = useSelector(selectManufacturer);
  return (
    <div className="form-container">
      <Formik
        enableReinitialize={true}
        initialValues={{
          color,
          manufacturer,
          sort
        }}
        onSubmit={async (values) => {
          dispatch(changePage(1));
          dispatch(changeColor(values.color));
          dispatch(changeManufacturer(values.manufacturer));
          dispatch(changeSorting(values.sort));
          dispatch(fetchCars({ ...values, page: 1 }));
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="color" onChange={handleChange}>
              <Form.Label>Color</Form.Label>
              <Form.Control as="select" defaultValue={color}>
                <option value='' >All Car Colors</option>
                { colorOptions.data.map(option => <option key={option} value={option}>{capitalize(option)}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="manufacturer" onChange={handleChange}>
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control as="select" defaultValue={manufacturer}>
                <option value=''>All Manufacturers</option>
                {manuOptions.data.map(option => <option key={option.name} value={option.name}>{option.name}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="sort" onChange={handleChange}>
              <Form.Label>Sort By</Form.Label>
              <Form.Control as="select" defaultValue={sort}>
                <option value=''>None</option>
                <option value='asc'>Mileage - Ascending</option>
                <option value='des'>Mileage - Descending</option>
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

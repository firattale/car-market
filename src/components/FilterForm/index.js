import React from 'react';
import { Formik, Form, Field } from 'formik';
import { selectColors, selectManufacturers } from '../../app/carsSlice';
import { useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from 'react-select';

const FilterForm = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.value);
    console.log('event.target.value', event.value);
  };
  const colorOptions = useSelector(selectColors);
  console.log('options', colorOptions);
  console.log('colo', colorOptions.map(el => ({ label: el, value: el })));
  const manuOptions = useSelector(selectManufacturers);
  return (
    <Formik
      initialValues={{
        formColor: null,
        formManufacturer: null
      }}
      onSubmit={async (values) => {
        console.log('values', values);
        //   await new Promise((r) => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ submitForm, isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl >
            <InputLabel id="formColor">Colors</InputLabel>
            <Select options={colorOptions.map(el => ({ value: el, label: el }))} onChange={handleChange}/>
            {/* <Form.Control as="select" onChange={props.handleChange}>
              <option value="">All car colors</option>
              {arr.map(option => <option key={option} value={option}>{option}</option>)}
            </Form.Control> */}
          </FormControl>
          {/* <Form.Group controlId="formManufacturer">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control as="select" onChange={props.handleChange}>
              <option value="">All manufacturers</option>
              {manuOptions.map(option => <option key={option} value={option.name}>{option.name}</option>)}
            </Form.Control>
          </Form.Group> */}
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;

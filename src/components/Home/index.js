import React, { useEffect } from 'react';
import { fetchColors, fetchManufacturers, fetchCars } from '../../app/asyncActions';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const params = {
    //   manufacturer: 'Skoda'
    // };
    dispatch(fetchColors());
    dispatch(fetchManufacturers());
    dispatch(fetchCars());
  }, []
  );
  return <div className="page-content">
    <p>Home Page</p>
    {/* <p>You can always go back to the <Link to="/">homepage</Link>.</p> */}
  </div>;
};

export default Home;

import React, { useEffect } from 'react';
import { fetchColors, fetchManufacturers } from '../../app/carsSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect((params) => {
    dispatch(fetchColors());
    dispatch(fetchManufacturers());
  }, []
  );
  return <div className="page-content">
    <p>Home Page</p>
    {/* <p>You can always go back to the <Link to="/">homepage</Link>.</p> */}
  </div>;
};

export default Home;

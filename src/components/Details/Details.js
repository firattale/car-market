import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCarDetail } from '../../app/asyncActions';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarDetail(id));
  }, []
  );
  return (
    <div className="page-content">
      <h3>Requested  ID: {id}</h3>
    </div>
  );
};

export default Details;

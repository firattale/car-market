import React from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {
  const { id } = useParams();
  return (
    <div className="page-content">
      <h3>Requested  ID: {id}</h3>
    </div>
  );
};

export default Details;
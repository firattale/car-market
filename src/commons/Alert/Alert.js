import { Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const AlertComponent = ({ variant, error }) => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 3000);
  if (show) {
    return (
      <Alert transition={true} variant={variant} onClose={() => setShow(false)} className="alert" >
        <p>
          {error}
        </p>
      </Alert>
    );
  }
  return null;
};

export default AlertComponent;

AlertComponent.propTypes = {
  variant: PropTypes.string,
  error: PropTypes.string
};

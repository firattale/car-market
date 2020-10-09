import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

const AlertComponent = ({ variant, error }) => {
  const [show, setShow] = useState(true);
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 3000);
  if (show) {
    return (
      <Alert transition variant={'danger'} onClose={() => setShow(false)} dismissible className="w-50 mx-auto position-absolute">
        <p>
          {error}
        </p>
      </Alert>
    );
  }
  return null;
};

export default AlertComponent;

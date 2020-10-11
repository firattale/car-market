import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
  return new Array(10).fill(0).map((el, i) => (
    <CardGroup key={i} >
      <Card style={{ paddingBottom: '17.5px', paddingTop: '17.5px' }}>
        <Skeleton width={104} height={90} className="m-0"/>
        <Card.Body className="d-flex flex-column">
          <Skeleton width={95} height={28} className="m-0"/>
          <Skeleton width={170} height={28} className="m-0"/>
          <Skeleton width={100} height={28} className="m-0"/>
        </Card.Body>
      </Card>
    </CardGroup>
  ));
};

export default SkeletonCard;

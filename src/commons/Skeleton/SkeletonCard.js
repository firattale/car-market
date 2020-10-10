import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
  return new Array(10).fill(0).map((el, i) => (
    <CardGroup key={i}>
      <Card>
        <Skeleton width={75} height={90}/>
        <Card.Body className="d-flex flex-column">
          <Skeleton width={95} height={28}/>
          <Skeleton width={100} height={28}/>
          <Skeleton width={100} height={28}/>
        </Card.Body>
      </Card>
    </CardGroup>
  ));
};

export default SkeletonCard;

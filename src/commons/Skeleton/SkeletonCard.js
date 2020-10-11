import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
  return new Array(10).fill(0).map((el, i) => (
    <CardGroup key={i} >
      <Card style={{ paddingBottom: '16px', paddingTop: '16px' }}>
        <Skeleton width={104} height={90}/>
        <Card.Body className="d-flex flex-column ml-3">
          <Skeleton width={95} height={28} />
          <Skeleton width={170} height={28} />
          <Skeleton width={100} height={28} />
        </Card.Body>
      </Card>
    </CardGroup>
  ));
};

export default SkeletonCard;

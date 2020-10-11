import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarDetail } from '../../app/asyncActions';
import { selectCarDetail, clearCarDetail } from '../../app/carsSlice';
import './details.scss';
import Skeleton from 'react-loading-skeleton';
import { Card, CardGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { capitalize } from '../../helpers/helpers';

const Details = () => {
  useEffect(() => {
    dispatch(fetchCarDetail(id));
    return () => {
      dispatch(clearCarDetail());
    };
  }, []
  );
  const { id } = useParams();
  const isFav = localStorage.getItem(id);
  const details = useSelector(selectCarDetail);
  const dispatch = useDispatch();
  const [fav, setFav] = useState(isFav);

  const onSaveHandler = () => {
    if (fav) {
      setFav(false);
      localStorage.removeItem(id);
    } else {
      setFav(true);
      localStorage.setItem(id, true);
    }
  };
  return (
    <div className="details-page-content">
      <div className="w-100 text-center">
        {details.pictureUrl ? <img src={details.pictureUrl} alt="Car Logo"></img> : <Skeleton width={300} height={260} className="m-0" />}
      </div>
      <div className="content-container">
        <CardGroup>
          <Card className="d-flex align-items-center">
            <Card.Body>
              <Card.Title><h1>{ details.modelName || <Skeleton className="m-0" width={50} />}</h1></Card.Title>
              <Card.Text>Stock #{" "}
                {details.stockNumber ? `${details.stockNumber} - ${details?.mileage?.number} KM - ${details.fuelType} - ${capitalize(details.color)}` : <Skeleton className="m-0" width={250} />}
              </Card.Text>
              <Card.Text>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="d-flex align-items-center">
            <Card.Body>
              <Card.Text>If you like this car, click the button and save it in your collection of favourite items.</Card.Text>
              <div className="d-flex justify-content-end"><Button type="submit" className="form-button mt-2" size="small" onClick={onSaveHandler}>{isFav ? 'UnSave' : 'Save'}</Button></div>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Details;

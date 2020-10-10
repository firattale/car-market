import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars, selectCurrentPage, incrementPage, decrementPage, changePage, selectManufacturer, selectColor } from '../../app/carsSlice';
import { fetchCars } from '../../app/asyncActions';

const Pagination = () => {
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const manufacturer = useSelector(selectManufacturer);
  const color = useSelector(selectColor);
  const { totalPageCount } = cars;
  const dispatch = useDispatch();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPageCount;
  const onNextClickHandler = () => {
    !isLastPage && dispatch(incrementPage());
    const params = {
      manufacturer,
      page: currentPage + 1,
      color
    };
    !isLastPage && dispatch(fetchCars(params));
  };
  const onPreviousClickHandler = () => {
    !isFirstPage && dispatch(decrementPage());
    const params = {
      manufacturer,
      page: currentPage - 1,
      color
    };
    !isFirstPage && dispatch(fetchCars(params));
  };
  const onFirstClickHandler = () => {
    !isFirstPage && dispatch(changePage(1));
    const params = {
      manufacturer,
      page: 1,
      color
    };
    !isFirstPage && dispatch(fetchCars(params));
  };

  const onLastClickHandler = () => {
    !isLastPage && dispatch(changePage(totalPageCount));
    const params = {
      manufacturer,
      page: totalPageCount,
      color
    };
    !isLastPage && dispatch(fetchCars(params));
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <span className={cx({ 'pag-button': !isFirstPage })} onClick={onFirstClickHandler}>First</span>
      <span className={cx({ 'pag-button': !isFirstPage })} onClick={onPreviousClickHandler}>Previous</span>
      <span className="page-count">Page {currentPage} of {totalPageCount}</span>
      <span className={cx({ 'pag-button': !isLastPage })} onClick={onNextClickHandler}>Next</span>
      <span className={cx({ 'pag-button': !isLastPage })} onClick={onLastClickHandler}>Last</span>
    </div>
  );
};

export default Pagination;
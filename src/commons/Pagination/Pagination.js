import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage, changePage } from '../../app/carsSlice';
import { fetchCars } from '../../app/asyncActions';
import { selectCars, selectCurrentPage, selectManufacturer, selectColor, selectSorting } from '../../app/selectors';

const Pagination = () => {
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const manufacturer = useSelector(selectManufacturer);
  const sort = useSelector(selectSorting);
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
      color,
      sort
    };
    !isLastPage && dispatch(fetchCars(params));
  };
  const onPreviousClickHandler = () => {
    !isFirstPage && dispatch(decrementPage());
    const params = {
      manufacturer,
      page: currentPage - 1,
      color,
      sort
    };
    !isFirstPage && dispatch(fetchCars(params));
  };
  const onFirstClickHandler = () => {
    !isFirstPage && dispatch(changePage(1));
    const params = {
      manufacturer,
      page: 1,
      color,
      sort
    };
    !isFirstPage && dispatch(fetchCars(params));
  };

  const onLastClickHandler = () => {
    !isLastPage && dispatch(changePage(totalPageCount));
    const params = {
      manufacturer,
      page: totalPageCount,
      color,
      sort
    };
    !isLastPage && dispatch(fetchCars(params));
  };
  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      <span className={cx({ 'enabled-pagination': !isFirstPage, 'disabled-pagination': isFirstPage })} onClick={onFirstClickHandler} data-testid="first-button">First</span>
      <span className={cx({ 'enabled-pagination': !isFirstPage, 'disabled-pagination': isFirstPage })} onClick={onPreviousClickHandler} data-testid="previous-button">Previous</span>
      <span className="disabled-pagination">Page {currentPage} of {totalPageCount}</span>
      <span className={cx({ 'enabled-pagination': !isLastPage, 'disabled-pagination': isLastPage })} onClick={onNextClickHandler} data-testid="next-button" >Next</span>
      <span className={cx({ 'enabled-pagination': !isLastPage, 'disabled-pagination': isLastPage })} onClick={onLastClickHandler} data-testid="last-button">Last</span>
    </div>
  );
};

export default Pagination;

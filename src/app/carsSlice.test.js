import reducer, { initialState, incrementPage, selectCurrentPage, decrementPage, changePage, changeColor, selectColor, changeManufacturer, selectManufacturer, clearCarDetail, selectSorting, changeSorting, selectCarDetail, selectCars, selectError, selectColors, selectManufacturers } from './carsSlice';

describe('carsSlice', () => {
  describe('reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
      const nextState = initialState;
      const result = reducer(undefined, {});
      expect(result).toEqual(nextState);
    });

    it('should properly increment current page', () => {
      reducer(initialState, incrementPage());
      const rootState = { cars: { currentPage: 2 } };
      expect(selectCurrentPage(rootState)).toEqual(2);
    });
    it('should properly decrement current page', () => {
      reducer(initialState, decrementPage());
      const rootState = { cars: { currentPage: 0 } };
      expect(selectCurrentPage(rootState)).toEqual(0);
    });
  });
  it('should properly change current page', () => {
    reducer(initialState, changePage(5));
    const rootState = { cars: { currentPage: 5 } };
    expect(selectCurrentPage(rootState)).toEqual(5);
  });
  it('should properly change color', () => {
    reducer(initialState, changeColor('green'));
    const rootState = { cars: { color: 'green' } };
    expect(selectColor(rootState)).toEqual('green');
  });
  it('should properly change manufacturer', () => {
    reducer(initialState, changeManufacturer('BMW'));
    const rootState = { cars: { manufacturer: 'BMW' } };
    expect(selectManufacturer(rootState)).toEqual('BMW');
  });
  it('should properly change sorting', () => {
    reducer(initialState, changeSorting('desc'));
    const rootState = { cars: { sorting: 'desc' } };
    expect(selectSorting(rootState)).toEqual('desc');
  });
  it('should properly clear car detail', () => {
    reducer(initialState, clearCarDetail());
    const rootState = { cars: { carDetail: {} } };
    expect(selectCarDetail(rootState)).toEqual({});
  });
  it('should properly set cars', () => {
    const fetchCarsAction = {
      type: 'cars/fetchCars/fulfilled',
      payload: {
        cars: ['bmw', 'audi'],
        totalPageCount: 100,
        totalCarsCount: 1000
      }
    };
    reducer(initialState, fetchCarsAction);
    const rootState = {
      cars: {
        cars: ['bmw', 'audi'],
        totalPageCount: 100,
        totalCarsCount: 1000
      }
    };
    expect(selectCars(rootState)).toEqual(['bmw', 'audi']);
  });
  it('should reject set cars', () => {
    const fetchCarsAction = { type: 'cars/fetchCars/rejected' };
    reducer(initialState, fetchCarsAction);
    const rootState = {
      cars: {
        cars: {},
        error: 'Something went wrong! Please refresh the page.'
      }
    };
    expect(selectCars(rootState)).toEqual({});
    expect(selectError(rootState)).toEqual('Something went wrong! Please refresh the page.');
  });

  it('should properly set colors', () => {
    const fetchColorsAction = {
      type: 'cars/fetchColors/fulfilled',
      payload: {
        colors: ['red', 'blue']
      }
    };
    reducer(initialState, fetchColorsAction);
    const rootState = {
      cars: {
        colors: ['red', 'blue']
      }
    };
    expect(selectColors(rootState)).toEqual(['red', 'blue']);
  });
  it('should properly set manufacturer', () => {
    const fetchManufacturersAction = {
      type: 'cars/fetchManufacturers/fulfilled',
      payload: {
        manufacturers: ['BMW', 'Audi']
      }
    };
    reducer(initialState, fetchManufacturersAction);
    const rootState = {
      cars: {
        manufacturers: ['BMW', 'Audi']
      }
    };
    expect(selectManufacturers(rootState)).toEqual(['BMW', 'Audi']);
  });
  it('should rejected manufacturer', () => {
    const fetchManufacturersAction = {
      type: 'cars/fetchManufacturers/rejected'
    };
    reducer(initialState, fetchManufacturersAction);
    const rootState = {
      cars: {
        manufacturer: { },
        error: 'Something went wrong! Please refresh the page.'
      }
    };
    expect(selectError(rootState)).toEqual('Something went wrong! Please refresh the page.');
  });
  it('should rejected colors', () => {
    const fetchColorsAction = {
      type: 'cars/fetchColors/rejected'
    };
    reducer(initialState, fetchColorsAction);
    const rootState = {
      cars: {
        colors: { },
        error: 'Something went wrong! Please refresh the page.'
      }
    };
    expect(selectError(rootState)).toEqual('Something went wrong! Please refresh the page.');
  });
  it('should rejected carDetails', () => {
    const fetchCarDetailsAction = {
      type: 'cars/fetchCarDetail/rejected'
    };
    reducer(initialState, fetchCarDetailsAction);
    const rootState = {
      cars: {
        error: 'Something went wrong! Please refresh the page.'
      }
    };
    expect(selectError(rootState)).toEqual('Something went wrong! Please refresh the page.');
  });
  it('should properly set car details', () => {
    const carDetail = {
      stockNumber: 10020,
      manufacturerName: 'Skoda',
      modelName: 'Karoq',
      color: 'white',
      fuelType: 'Diesel',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    };
    const fetchManufacturersAction = {
      type: 'cars/fetchCarDetail/fulfilled',
      payload: {
        car: carDetail
      }
    };
    reducer(initialState, fetchManufacturersAction);
    const rootState = {
      cars: {
        carDetail
      }
    };
    expect(selectCarDetail(rootState)).toEqual(carDetail);
  });
});

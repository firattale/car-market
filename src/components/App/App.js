import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import { useSelector } from 'react-redux';
import { selectError } from '../../app/carsSlice';
import AlertComponent from '../../commons/Alert/Alert';

const Details = lazy(() => import('../../routes/Details/Details'));
const Home = lazy(() => import('../../routes/Home/Home'));
const Page404 = lazy(() => import('../../routes/Page404/Page404'));

export const App = () => {
  const error = useSelector(selectError);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Suspense fallback={<div></div>}>
          <Header />
          {error && <div className="d-flex justify-content-center"><AlertComponent variant="danger" error={error} /></div>}
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </Suspense>

      </div>
    </Router>
  );
};

export default App;

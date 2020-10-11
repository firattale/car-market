import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Details from '../../routes/Details/Details';
import Page404 from '../../routes/Page404/Page404';
import './App.scss';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import { useSelector } from 'react-redux';
import { selectError } from '../../app/carsSlice';
import AlertComponent from '../../commons/Alert/Alert';

export const App = () => {
  const error = useSelector(selectError);
  return (
    <Router>
      <div className="app">
        <Header/>
        {error && <div className="d-flex justify-content-center"><AlertComponent variant="danger" error={error}/></div>}
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
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

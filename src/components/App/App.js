import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Page404 from '../Page404/Page404';
import './App.css';
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
        {error && <AlertComponent variant="danger" error={error}/>}
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

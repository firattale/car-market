import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home';
import Details from '../Details';
import Page404 from '../Page404';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import { selectError } from '../../app/carsSlice';

export const App = () => {
  const error = useSelector(selectError);
  console.log('error', error);
  return (
    <Router>
      <div className="app">
        <Header/>
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

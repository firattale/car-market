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

export const App = () => {
  return (
    <Router>
      <div className="app">
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
      </div>
    </Router>
  );
};

export default App;

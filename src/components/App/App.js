import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../Home';
import Details from '../Details';
import Page404 from '../Page404';

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details/48">Details</Link>
          </li>
        </ul>
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

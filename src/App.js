import React, { createContext, useState } from 'react';
import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import NoMatch from './Component/NoMatch/NoMatch';
import Admin from './Component/Admin/Admin';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';
import Deals from './Component/Deals/Deals';

export const userContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/checkOut/:productKey'>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path='/orders'>
            <Orders></Orders>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default App;
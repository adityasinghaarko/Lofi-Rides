import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivatRoute from './components/PrivateRoute/PrivatRoute';
import Destination from './components/Destination/Destination';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
  })

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivatRoute path="/destination/:vehicle">
              <Destination />
            </PrivatRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="full-web-ui">
      <Router>
      <NavigationBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
    </div>

  );
}

export default App;

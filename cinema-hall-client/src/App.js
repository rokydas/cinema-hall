import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Booking from "./components/Booking/Booking";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:id">
            <Booking />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

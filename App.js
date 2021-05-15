import React from 'react';
import './App.css';
import './aboutus.css';
import "./login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import SignUp from "./SignUp";
import aboutus from './aboutus';
import contactus from "./contactus";
import Booking from "./Booking";
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>


function App() {
  return (
  <Router>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>

    <script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    <div className="App">
		<div img src="https://i.pinimg.com/originals/24/d2/91/24d29185ff23c2364eb13ab8604958af.jpg"/>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>AIR INDIA TICKET RESERVATION SYSTEM</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>SIGN UP</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/About-Us"}>ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Contact-Us"}>CONTACT US</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/About-Us"component={aboutus} />
            <Route path="/Contact-Us"component={contactus} />
            <Route path="/Booking"component={Booking} />
            
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
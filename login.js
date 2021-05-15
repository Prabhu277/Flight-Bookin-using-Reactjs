import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Booking from "./Booking";


export default class Login extends Component {
    render() {
        return (
            
            <form>
                
                <h3>SIGN IN</h3>
                <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input type="email" className="form-control" placeholder="ENTER EMAIL" />
                </div>
                <div className="form-group">
                    <label>PASSWORD</label>
                    <input type="password" className="form-control" placeholder="ENTER PASSWORD" />
                </div>


                <center><Link to = "/Booking">Login</Link> </center>
              
            <Route path = "/Booking" component = {Booking}></Route>
            </form>
        );
    }
}
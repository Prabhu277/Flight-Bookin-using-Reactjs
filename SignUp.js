import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>SIGN UP</h3>

                <div className="form-group">
                    <label>FIRST NAME</label>
                    <input type="text" className="form-control" placeholder="ONLY CAPITAL LETTERS" />
                </div>

                <div className="form-group">
                    <label>LAST NAME</label>
                    <input type="text" className="form-control" placeholder="INITIAL AT LAST" />
                </div>

                <div className="form-group">
                    <label>PASSPORT NUMBER</label>
                    <input type="text" className="form-control" placeholder="8 CHARECTERS ONLY EXISTS" />
                </div>

                <div className="form-group">
                    <label>ADHAR CARD NUMBER</label>
                    <input type="text" className="form-control" placeholder="12 CHARECTERS ONLY EXISTS" />
                </div>

                <div className="form-group">
                    <label>DATE-OF-BIRTH</label>
                    <input type="text" className="form-control" placeholder="DD-MM-YYYY" />
                </div>

            
                <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input type="email" className="form-control" placeholder="ENTER EMAIL" />
                </div>

                <div className="form-group">
                    <label>PASSWORD</label>
                    <input type="password" className="form-control" placeholder="ENTER PASSWORD" />
                </div>
                

                <button type="submit" className="btn btn-primary btn-block">SIGN UP</button>
              
            </form>
        );
    }
}
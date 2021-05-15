import React, { Component } from "react";
 
class Booking extends Component {
  render() {
    return (
        
  
    <div>
          <h3>BOOKING DETAILS</h3>
           <div className="form-group">
                    <label>FROM</label>
                    
          <select required name='from' onchange='this.form.()'>
                                                    <option value="">Select a location...</option>
                                                    <option value="CHENNAI">CHENNAI</option>
                                                    <option value="COIMBATORE">COIMBATORE</option>
                                                    <option value="BANGALORE">BANGALORE</option>
                                                    <option value="DELHI">DELHI</option>
                                                    <option value="GUJARAT">GUJARAT</option>
                                                    <option value="SRI LANKA">SRILANKA</option>
                                                    <option value="MADURAI">MADURAIr</option>
                                                    <option value="MATARA">MATARA</option>
                                                    <option value="BATTICALOA">BATTICALOA</option>
                                                    <option value="COLOMBO">COLOMBO</option>
                                                </select>
        </div>
        <div className="form-group">
                    <label>TO</label>
                    
          <select required name='from' onchange='this.form.()'>
                                                    <option value="">Select a location...</option>
                                                    <option value="CHENNAI">CHENNAI</option>
                                                    <option value="COIMBATORE">COIMBATORE</option>
                                                    <option value="BANGALORE">BANGALORE</option>
                                                    <option value="DELHI">DELHI</option>
                                                    <option value="GUJARAT">GUJARAT</option>
                                                    <option value="SRI LANKA">SRILANKA</option>
                                                    <option value="MADURAI">MADURAIr</option>
                                                    <option value="MATARA">MATARA</option>
                                                    <option value="BATTICALOA">BATTICALOA</option>
                                                    <option value="COLOMBO">COLOMBO</option>
                                                </select>
        </div>
        <div class="col-md-6" />
                                            <fieldset />
                                                <label for="departure">Departure date:</label>
                                                <input name="deparure" type="text" class="form-control date" id="deparure" placeholder="DD-MM-YYYY" required="" onchange='this.form.()' />
                                        
                                        
                                        <div class="col-md-6" />
                                            <fieldset /> 
                                                <label for="return">Return date:</label>
                                                <input name="return" type="text" class="form-control date" id="return" placeholder="DD-MM-YYYY" required="" onchange='this.form.()' />
                                            
                                        

                                                <div class="col-md-6" />
                                            <div class="radio-select" />
                                                <div class="row" />
                                                    <div class="col-md-6 col-sm-6 col-xs-6" />
                                                        <label for="round">Round</label>
                                                        <input type="radio" name="trip" id="round" value="round" required="required"onchange='this.form.()' />
                                                    
                                                    <div class="col-md-6 col-sm-6 col-xs-6" />
                                                        <label for="oneway">Oneway</label>
                                                        <input type="radio" name="trip" id="oneway" value="one-way" required="required"onchange='this.form.()' />
                                                    
                                                
                                            
                                       
                                                        <button type="submit" className="btn btn-primary btn-block">CONFIRM BOOKING</button>
    </div>  

    );
  }
}
 
export default Booking;
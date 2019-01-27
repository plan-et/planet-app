import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt6_Large extends Component {
    constructor(props) {
        super(props);
        this.state = {
          permit_status:'',
        };
    }
    handleRadioButton = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    render() {
        return <div className="component-prompt" style={{"paddingBottom": "5vh"}}>
          <h3 style={{"margin": "2vw"}}>Some types of locations or events require a permit for groups over a certain size.</h3>
          <h3 style={{"margin": "2vw"}}>Will you need a permit for your event</h3>
          <FormControl component="fieldset">
          <FormLabel component="legend">Permit</FormLabel>
          <RadioGroup
            aria-label="Item Status Selector"
            name="Status"
            value={this.state.value}
            onChange={this.handleRadioButton}>>
            <FormControlLabel value="Have" control={<Radio />} label="Have" />
            <FormControlLabel value="Need" control={<Radio />} label="Need" />
            <FormControlLabel value="Not Applicable" control={<Radio />} label="Not Applicable" />
          </RadioGroup>
        </FormControl>
        </div>;
    }
}
export default Prompt6_Large;
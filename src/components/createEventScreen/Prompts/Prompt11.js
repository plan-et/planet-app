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
export class Prompt11_Large extends Component {
    constructor(props) {
      super(props);
      this.state = {
        emergency_plan:'',
      };
    }
    handleRadioButton = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    render() {
        return <div className="component-prompt" style={{"paddingBottom": "5vh"}}>
          <h3 style={{"margin": "2vw"}}>In case of emergency, having a safety plan is important, if not mandatory.</h3>
          <h3 style={{"margin": "2vw"}}>Do you have plans for emergency situations?</h3>
          <h3 style={{ "margin": "2vw" }}>{JSON.stringify(this.state.emergency_plan)}</h3>
          <FormControl component="fieldset">
          <FormLabel component="legend">Emergency</FormLabel>
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
export default Prompt11_Large;
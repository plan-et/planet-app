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
export class Prompt7_Large extends Component {
    constructor(props) {
        super(props);
        this.state = {
          publicity_status:'',
        };
    }
    handleRadioButton = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    render() {
        return <div className="component-prompt" style={{"paddingBottom": "5vh"}}>
          <h3 style={{"margin": "2vw"}}>Do you have a plan to publicize your event?</h3>
          <FormControl component="fieldset">
          <FormLabel component="legend">Publicity</FormLabel>
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
        <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "5vh", "fontSize": "18px" }}>
          Next
        </Button>
        </div>;
    }
}
export default Prompt7_Large;
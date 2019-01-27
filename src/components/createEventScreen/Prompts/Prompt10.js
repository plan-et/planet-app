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
export class Prompt10_Large extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dietary_restrictions:'',
        };
    }
    handleRadioButton = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    render() {
        return <div className="component-prompt" style={{"paddingBottom": "5vh"}}>
          <h3 style={{"margin": "2vw"}}>Great! You're going to have food at your event. Will you need to plan for any dietary restriction?</h3>
          <FormControl component="fieldset">
          <FormLabel component="legend">Dietary Restrictions</FormLabel>
          <RadioGroup
            aria-label="Item Status Selector"
            name="Status">
            <FormControlLabel value="Have" control={<Radio />} label="Yes" />
            <FormControlLabel value="Need" control={<Radio />} label="No" />
            <FormControlLabel value="Not Applicable" control={<Radio />} label="Unsure" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "5vh", "fontSize": "18px" }}>
          Next
        </Button>
        </div>;
    }
}
export default Prompt10_Large;
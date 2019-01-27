import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt1 extends Component {
    constructor(props) {
       super(props);
         this.state = {
             event_size: null,
             private:false,
         };
    }
    handleRadioButton = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    render() {
        let size;
        return <div className="component-prompt">
            <ToggleButtonGroup value={size} exclusive>
                <ToggleButton value="small" variant="contained" style={{ "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "5vh", "fontSize": "18px" }} >
                    Small Event
        </ToggleButton>
                <p style={{ "marginTop": "0px" }}>1-30 guests</p>
                <ToggleButton value="large" variant="contained" style={{ "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "1vh", "fontSize": "18px" }}>
                    Large
        </ToggleButton>
                <p style={{ "marginTop": "0px" }}>30+ guests</p>
            </ToggleButtonGroup>
            <FormControlLabel
                control={
                    <Switch />
                }
                label="Private"
            />
        </div>;
    }
}
export default Prompt1;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt14_Large extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }

  render() {
    let size;
    return <div className="component-prompt" style={{ "paddingBottom": "5vh" }}>
      <h3 style={{ "margin": "2vw" }}>Are there any miscellaneous items you need for your event?</h3>
      <h3 style={{ "margin": "2vw" }}>Write them below to add them to the list.</h3>

      <TextField
        id="standard-name"
        label="Needed Items"
        margin="normal"
        variant="filled"
        style={{ "width": "75vw", "backgroundColor": "white" }}
      />
      <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "fontSize": "20px", "marginTop": "4.5%", "height": "8vh" }}><AddCircleOutline /></Button>
      <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "5vh", "fontSize": "18px" }}>
        Next
      </Button>
    </div>;
  }
}
export default Prompt14_Large;
import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt3_Large extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    const styles = {
      textField: {
        fontSize: '18px', //works!
      }
    }
    return <div className="component-prompt">
      <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Event Name"
          margin="normal"
          variant="filled"
          style={{ "width": "85vw", "backgroundColor": "white" }}
        />
        <br />
        <TextField
          id="outlined-textarea"
          label="Event Description"
          rows="5"
          multiline
          margin="normal"
          variant="filled"
          style={{ "width": "85vw", "backgroundColor": "white" }}
        />
        <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "2vh", "fontSize": "18px" }}>
          Next
        </Button>
        </form>
        

    </div>;
    }
  }
export default Prompt3_Large;
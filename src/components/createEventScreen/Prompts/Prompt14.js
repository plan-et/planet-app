import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt14_Large extends Component {
  constructor(props) {
     super(props);
      this.state = {
        additional_needs: [],
      };
  }
  handleRadioButton = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
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
      <Link to="/overview" style={{"textDecoration" : "none", "color" : "white"}}><Button variant="contained" style={{ "color": "white", "backgroundColor": "#FF6B12", "width": "50vw", "marginTop": "2vh","marginBottom": "2vh", "fontSize": "18px" }} >
          Complete Event
      </Button></Link>
    </div>;
  }
}
export default Prompt14_Large;
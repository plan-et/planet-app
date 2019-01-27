import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt2_Large extends Component {
  constructor(props) {
      super(props);
      this.state = {
        event_type:'',
      };
  }
  handleRadioButton = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  render() {
    return <div className="component-prompt">
      <h2 >Event Type</h2>
      <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "0vh", "fontSize": "18px" }} >
        Town Hall
        </Button>
      <br />
      <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "2vh", "fontSize": "18px" }}>
        Protest
        </Button>
      <br />
      <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "2vh", "fontSize": "18px" }}>
        Celebration
        </Button>
      <br />
      <Button variant="contained" style={{ "color": "white", "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "2vh", "fontSize": "18px" }}>
        Other
        </Button>

    </div>;
  }
}
export default Prompt2_Large;
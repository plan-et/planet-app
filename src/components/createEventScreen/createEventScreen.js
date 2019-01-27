import React, { Component } from 'react';
import './createEventScreen.scss'
import Prompt1 from './Prompts/Prompt1.js';
import Prompt2_Large from './Prompts/Prompt2.js';
import Prompt3_Large from './Prompts/Prompt3.js';
import Prompt4_Large from './Prompts/Prompt4.js';
import Prompt5_Large from './Prompts/Prompt5.js';
import Prompt6_Large from './Prompts/Prompt6.js';
import Prompt7_Large from './Prompts/Prompt7.js';
import Prompt8_Large from './Prompts/Prompt8.js';
import Prompt9_Large from './Prompts/Prompt9.js';
import Prompt10_Large from './Prompts/Prompt10.js';
import Prompt11_Large from './Prompts/Prompt11.js';
import Prompt12_Large from './Prompts/Prompt12.js';
import Prompt13_Large from './Prompts/Prompt13.js';
import Prompt14_Large from './Prompts/Prompt14.js';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export default class createEventScreen extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <div className="component-create-event-screen">
      <div className="orange" style={{"padding":"1%", "display":"flex-box"}}>
        <h1 className="center">
          <div style={{"display":"flex", "justifyContent":"center"}}>
            <img src={require("./Create-Icon.png")} />
            <span>Create Event</span>
          </div>
        </h1>
      </div>
      {/* Div below is where all the different planning prompts will render */}
      <div style={{ "marginTop":"45vh", "backgroundColor": "none", "height":"55vh", "overflow":"scroll"}} className="center">
        {/* <Prompt1/> */}
        {/* <Prompt2_Large/>  */}
        {/* <Prompt3_Large/> */}
        {/* <Prompt4_Large/> */}
        <Prompt5_Large/>
        {/* <Prompt14_Large/> */}
      
      </div>
    
    </div>;
  }
}
// export default connect(
//     ({ createEventScreen }) => ({ ...createEventScreen }),
//     dispatch => bindActionCreators({ ...createEventScreenActions }, dispatch)
//   )( createEventScreen );
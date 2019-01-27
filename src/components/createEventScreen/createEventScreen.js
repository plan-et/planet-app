import React, { Component } from 'react';
import './createEventScreen.scss'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
  constructor(props) {
     super(props);
     this.state = {
       prompt_to_render: 1,
     };
  }
  handleNextButtonClick= () => {
    console.log('Next button has been clicked');
    this.setState({
      prompt_to_render: this.state.prompt_to_render + 1,
    });
    //const action = {type: 'ADD_INPUT_4', payload: this.state.input4};
    //console.log(action.type, action.payload);
    //this.props.dispatch(action);
    //this.props.history.push('/2');
}
  render() {
    let prompt_to_render= this.state.prompt_to_render;
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
        { prompt_to_render == 1 && < Prompt1/>}
        { prompt_to_render == 2 && < Prompt2_Large/>}
        { prompt_to_render == 3 && < Prompt3_Large/>}
        { prompt_to_render == 4 && < Prompt4_Large/>}
        { prompt_to_render == 5 && < Prompt5_Large/>}
        { prompt_to_render == 6 && < Prompt6_Large/>}
        { prompt_to_render == 7 && < Prompt7_Large/>}
        { prompt_to_render == 8 && < Prompt8_Large/>}
        { prompt_to_render == 9 && < Prompt9_Large/>}
        { prompt_to_render == 10 && < Prompt10_Large/>}
        { prompt_to_render == 11 && < Prompt11_Large/>}
        { prompt_to_render == 12 && < Prompt12_Large/>}
        { prompt_to_render == 13 && < Prompt13_Large/>}
        { prompt_to_render == 14 && < Prompt14_Large/>}
        

        { prompt_to_render <14 &&<Button variant="contained" style={{ "color": "white", "backgroundColor": "#FF6B12", "width": "30vw", "marginTop": "2vh","marginBottom": "2vh", "fontSize": "18px" }} onClick={this.handleNextButtonClick}>
          Next
        </Button>}
      </div>

    
    </div>;
  }
}
// export default connect(
//     ({ createEventScreen }) => ({ ...createEventScreen }),
//     dispatch => bindActionCreators({ ...createEventScreenActions }, dispatch)
//   )( createEventScreen );
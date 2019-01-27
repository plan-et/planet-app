import React, {Component} from 'react';
import './mainScreen.scss'
import Button from '@material-ui/core/Button';
import '../homeButton/homeButton';
import { Link } from 'react-router-dom';
import HomeButton from '../homeButton/homeButton';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as mainScreenActions from "../../store/mainScreen/actions";
export default class mainScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    
    render() {
      let bg =require ('./Main-Screen-Background-02.png');
      return <div className="component-main-screen" >
      <div>
        <HomeButton/>
      </div>
        <div style={{"backgroundImage" :  "url("+bg+")", "height": "100vh"}}>
        <div className="buttonContainer" style={{"height": "auto", "display" :"flex-box", "justify-content": "center", "align-items":"center", "paddingTop": "30vh", "paddingBottom": "10vh"}}> 
          <p><Link to="/createEvent" style={{"textDecoration" : "none", "color" : "white"}}><img src={require("./Action-Icons-01.svg")} style={{"height" : "12vh"}}/><br/>
            Create
            </Link></p>
          <p><Link to="/discover" style={{"textDecoration" : "none", "color" : "white"}}><img src={require("./Action-Icons-02.svg")} style={{"height" : "12vh"}}/><br/>
            Discover
            </Link></p>
          <p><Link to="/myEvents" style={{"textDecoration" : "none", "color" : "white"}}><img src={require("./Action-Icons-03.svg")} style={{"height" : "12vh"}}/><br/>
            My Events
            </Link></p>
        </div>
        </div>
      </div>;
    }
  }
// export default connect(
//     ({ mainScreen }) => ({ ...mainScreen }),
//     dispatch => bindActionCreators({ ...mainScreenActions }, dispatch)
//   )( mainScreen );
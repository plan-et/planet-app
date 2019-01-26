import Button from '@material-ui/core/Button';
import React, {Component} from 'react';
import './landingScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as landingScreenActions from "../../store/landingScreen/actions";
export default class landingScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-landing-screen"><h1>Hello! component landingScreen</h1>
      
      <Button className="uploadButton">Login</Button>
      <Button className="uploadButton">Sign up</Button>


      </div>;

    }
  }
// export default connect(
//     ({ landingScreen }) => ({ ...landingScreen }),
//     dispatch => bindActionCreators({ ...landingScreenActions }, dispatch)
//   )( landingScreen );
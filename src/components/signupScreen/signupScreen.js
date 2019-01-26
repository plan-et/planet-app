import React, {Component} from 'react';
import './signupScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as signupScreenActions from "../../store/signupScreen/actions";
export default class signupScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-signup-screen">Hello! component signupScreen</div>;
    }
  }
// export default connect(
//     ({ signupScreen }) => ({ ...signupScreen }),
//     dispatch => bindActionCreators({ ...signupScreenActions }, dispatch)
//   )( signupScreen );
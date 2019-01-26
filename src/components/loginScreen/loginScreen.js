import React, {Component} from 'react';
import './loginScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginScreenActions from "../../store/loginScreen/actions";
export default class loginScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-login-screen">Hello! component loginScreen</div>;
    }
  }
// export default connect(
//     ({ loginScreen }) => ({ ...loginScreen }),
//     dispatch => bindActionCreators({ ...loginScreenActions }, dispatch)
//   )( loginScreen );
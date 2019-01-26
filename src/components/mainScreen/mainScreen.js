import React, {Component} from 'react';
import './mainScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as mainScreenActions from "../../store/mainScreen/actions";
export default class mainScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-main-screen">Hello! component mainScreen</div>;
    }
  }
// export default connect(
//     ({ mainScreen }) => ({ ...mainScreen }),
//     dispatch => bindActionCreators({ ...mainScreenActions }, dispatch)
//   )( mainScreen );
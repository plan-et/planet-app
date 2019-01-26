import React, {Component} from 'react';
import './largeEventScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as largeEventScreenActions from "../../store/largeEventScreen/actions";
export default class largeEventScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-large-event-screen">Hello! component largeEventScreen</div>;
    }
  }
// export default connect(
//     ({ largeEventScreen }) => ({ ...largeEventScreen }),
//     dispatch => bindActionCreators({ ...largeEventScreenActions }, dispatch)
//   )( largeEventScreen );
import React, {Component} from 'react';
import './smallEventScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as smallEventScreenActions from "../../store/smallEventScreen/actions";
export default class smallEventScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-small-event-screen">Hello! component smallEventScreen</div>;
    }
  }
// export default connect(
//     ({ smallEventScreen }) => ({ ...smallEventScreen }),
//     dispatch => bindActionCreators({ ...smallEventScreenActions }, dispatch)
//   )( smallEventScreen );
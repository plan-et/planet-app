import React, {Component} from 'react';
import './myEventsScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as myEventsScreenActions from "../../store/myEventsScreen/actions";
export default class myEventsScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-my-events-screen">Hello! component myEventsScreen</div>;
    }
  }
// export default connect(
//     ({ myEventsScreen }) => ({ ...myEventsScreen }),
//     dispatch => bindActionCreators({ ...myEventsScreenActions }, dispatch)
//   )( myEventsScreen );
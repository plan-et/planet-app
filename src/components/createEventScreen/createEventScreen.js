import React, {Component} from 'react';
import './createEventScreen.scss'
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
      <div className="orange">
      <h1 class="text-center">Create Event</h1>
      </div>
      </div>;
    }
  }
// export default connect(
//     ({ createEventScreen }) => ({ ...createEventScreen }),
//     dispatch => bindActionCreators({ ...createEventScreenActions }, dispatch)
//   )( createEventScreen );
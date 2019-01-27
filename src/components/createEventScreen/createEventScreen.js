import React, { Component } from 'react';
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
      <div className="orange" style={{"padding":"1%"}}>
        <h1 className="center">
          <div style={{"display":"flex", "justifyContent":"center"}}>
            <img src={require("./Create-Icon.png")} />
            <span>Create Event</span>
            </div>
        </h1>
      </div>
    </div>;
  }
}
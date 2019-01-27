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
      return <div className="component-my-events-screen">
            <div className="red" style={{"padding":"1%"}}>
        <h1 className="center">
          <div style={{"display":"flex", "justifyContent":"center"}}>
            <img src={require("./MyEvents-Icon.png")} />
            <span>My Events</span>
            </div>
        </h1>
      </div>
    </div>;
    }
  }
// export default connect(
//     ({ myEventsScreen }) => ({ ...myEventsScreen }),
//     dispatch => bindActionCreators({ ...myEventsScreenActions }, dispatch)
//   )( myEventsScreen );
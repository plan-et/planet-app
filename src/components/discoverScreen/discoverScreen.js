import React, {Component} from 'react';
import './discoverScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as discoverScreenActions from "../../store/discoverScreen/actions";
export default class discoverScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-discover-screen">
        <div className="yellow" style={{"padding":"1%"}}>
        <h1 className="center">
          <div style={{"display":"flex", "justifyContent":"center"}}>
            <img src={require("./Discover-Icon.png")} />
            <span>Discover Events</span>
            </div>
        </h1>
      </div>
    </div>;
    }
  }
// export default connect(
//     ({ discoverScreen }) => ({ ...discoverScreen }),
//     dispatch => bindActionCreators({ ...discoverScreenActions }, dispatch)
//   )( discoverScreen );
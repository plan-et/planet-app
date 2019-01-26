import React, {Component} from 'react';
import './landingScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as landingScreenActions from "../../store/landingScreen/actions";
export default class landingScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-landing-screen">Hello! component landingScreen</div>;
    }
  }
// export default connect(
//     ({ landingScreen }) => ({ ...landingScreen }),
//     dispatch => bindActionCreators({ ...landingScreenActions }, dispatch)
//   )( landingScreen );
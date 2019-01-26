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
      return <div className="component-discover-screen">Hello! component discoverScreen</div>;
    }
  }
// export default connect(
//     ({ discoverScreen }) => ({ ...discoverScreen }),
//     dispatch => bindActionCreators({ ...discoverScreenActions }, dispatch)
//   )( discoverScreen );
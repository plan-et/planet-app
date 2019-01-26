import React, {Component} from 'react';
import './overviewScreen.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as overviewScreenActions from "../../store/overviewScreen/actions";
export default class overviewScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-overview-screen">Hello! component overviewScreen</div>;
    }
  }
// export default connect(
//     ({ overviewScreen }) => ({ ...overviewScreen }),
//     dispatch => bindActionCreators({ ...overviewScreenActions }, dispatch)
//   )( overviewScreen );
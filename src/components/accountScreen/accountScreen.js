import React, {Component} from 'react';
import './accountScreen.scss'
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as accountScreenActions from "../../store/accountScreen/actions";
export default class accountScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-account-screen">
      <Link to="/main"><span style={{float: 'left', padding: '3%', color: '#ced2d5'}}><HomeIcon /></span></Link>
      <Link to="/account"><span style={{float: 'right', padding: '3%', color: '#ced2d5'}}><AccountIcon /></span></Link>
      </div>;
    }
  }
// export default connect(
//     ({ accountScreen }) => ({ ...accountScreen }),
//     dispatch => bindActionCreators({ ...accountScreenActions }, dispatch)
//   )( accountScreen );
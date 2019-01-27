import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import './homeButton.scss'
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeButtonActions from "../../store/homeButton/actions";
class homeButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-home-button">
      <Link to="/main"><span style={{float: 'left', padding: '2%', color: '#ced2d5'}}><HomeIcon /></span></Link>
      <Link to="/account"><span style={{float: 'right', padding: '2%', color: '#ced2d5'}}><AccountIcon /></span></Link>
      </div>;
    }
  }
// export default connect(
//     ({ homeButton }) => ({ ...homeButton }),
//     dispatch => bindActionCreators({ ...homeButtonActions }, dispatch)
//   )( homeButton );

export default connect()(homeButton);

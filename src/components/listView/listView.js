import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './listView.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as listViewActions from "../../store/listView/actions";
export default class listView extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <div className="component-list-view">
      <Link to="/main"><span style={{ float: 'left', padding: '3%', color: '#ced2d5' }}><HomeIcon /></span></Link>
      <Link to="/account"><span style={{ float: 'right', padding: '3%', color: '#ced2d5' }}><AccountIcon /></span></Link>
      <div className="yellow" style={{ "padding": "1%", display: 'flexbox' }}>
        <h1 className="center">
          <div style={{ "display": "flex", "justifyContent": "center" }}>
            <img src={require("./Discover-Icon.png")} />
            <span>Discover Events</span>
          </div>
        </h1>
      </div>;
    </div>
        }
}
    // export default connect(
//     ({listView}) => ({...listView}),
//     dispatch => bindActionCreators({...listViewActions}, dispatch)
//   )( listView );
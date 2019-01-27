import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import './landingScreen.scss';
import { Link, Route } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as landingScreenActions from "../../store/landingScreen/actions";
export default class landingScreen extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <div className="component-landing-screen">
      <Link to="/login"><Button style={{"backgroundColor": "#00CCB8", "fontWeight":"bolder", "marginTop": "125%", "width":"50vw"}} className="button" color="primary" variant="contained"><p>Login</p></Button></Link><br/>
      <Link to="/sign-up"><Button style={{"backgroundColor": "#FF6B12", "fontWeight":"bolder", "marginTop":"5px", "width":"50vw"}} className="button" color="secondary" variant="contained"><p>Sign up</p></Button></Link>
    </div>;

  }
}
// export default connect(
//     ({ landingScreen }) => ({ ...landingScreen }),
//     dispatch => bindActionCreators({ ...landingScreenActions }, dispatch)
//   )( landingScreen );
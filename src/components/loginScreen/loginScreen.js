import React, {Component} from 'react';
import './loginScreen.scss'
import { connect } from "react-redux";
import { loginUser, loginSuccess, loginFail } from '../../redux/actions/AuthActions';

class loginScreen extends Component {
  render() {
    return (
    <div>
      <div>Login</div> 
      <p>{this.props.loading}</p>
    </div>
    )
  }
}

const mapStateToProps = ({ Auth }) => {
  const {error, loading} = Auth;
  return {error, loading};
}

export default connect(mapStateToProps,{ loginUser, loginSuccess, loginFail })(loginScreen);
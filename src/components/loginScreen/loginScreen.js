import React, { Component } from 'react';
import './loginScreen.scss'
import { connect } from "react-redux";
import { loginUser, loginSuccess, loginFail } from '../../redux/actions';

class loginScreen extends Component {

  onUsernameChange = (text) => {
    this.props.usernameChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { username, password } = this.props;
    if (this.props.username === '' || this.props.password === '') {
      this.props.loginFail();
    } else {
      this.props.loginUser();
    }
  }

  renderError = () => {
    if (!this.props.error === "") {
      return (
        <h3>{this.props.error}</h3>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderError()}
        <h1>Login to Plan(et)</h1>
        <form onSubmit={this.onButtonPress}>
          <div>
            <h2>Username</h2>
            <input
              type="text"
              name="username"
              value={this.props.username}
              onChange={this.onUsernameChange}
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              type="password"
              name="password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ Auth }) => {
  const { user, password, error, loading } = Auth;
  return { user, password, error, loading };
}

export default connect(mapStateToProps, { loginUser, loginSuccess, loginFail })(loginScreen);
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import './loginScreen.scss'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  loginUser = (event) => {
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Please fill in all fields!',
      });
    } else {
      this.props.history.push('/main');
    }
  }

  render() {
    return (
      <div style={styles.container}>
        {this.renderAlert()}
        <form onSubmit={this.loginUser}>
          <div>
            <label htmlFor="username">
              Username:
              <input
                style={styles.input}
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                style={styles.input}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          
          <div>
          <Link to="main"><Button style={{"backgroundColor": "#00CCB8", "fontWeight":"bolder", "marginTop": "30%", "width":"50vw"}} className="button" color="primary" variant="contained"><p>Login</p></Button><br/></Link>
          </div>
          <Link to="/"><Button style={{"backgroundColor": "#FF6B12", "fontWeight":"bolder", "marginTop":"5px", "width":"50vw"}} className="button" color="secondary" variant="contained"><p>Cancel</p></Button></Link>
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: '65%',
  },
  input: {
    padding: '5px',
    margin: 15,
    width: '50%'
  },
  txt: {
    fontSize: '22px',
    color: '#ffffff'
  }
}

export default connect()(loginScreen);
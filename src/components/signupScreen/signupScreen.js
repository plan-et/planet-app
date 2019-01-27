import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signupScreen.scss';

class signupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '' || this.state.email === ''
      || this.state.first_name === '' || this.state.last_name === '') {
      this.setState({
        message: 'Please fill in all fields!',
      });
    } else {
      const body = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/signup/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/main');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The email might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

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

  render() {
    return (
      <div style={styles.container}>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <div>
            <label htmlFor="first_name">
              First Name:
              <input
                style={styles.input}
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="last_name">
              Last Name:
              <input
                style={styles.input}
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label>
          </div>
          <label htmlFor="username">
            Username:
              <input
              style={styles.input}
              type="text"
              name="first_name"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
          <div>
            <label htmlFor="email">
              Email URL:
              <input
                style={styles.input}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
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
            <input
              style={styles.register}
              type="submit"
              name="submit"
              value="Register"
            />
            <br />
            <Link to="/" style={styles.cancel}>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '222px',
  },
  input: {
    padding: '5px',
    marginLeft: 20,
    width: '50%'
  },
  register: {
    fontSize: '22px',
    color: '#ffffff'
  },
  cancel: {
    fontSize: '22px',
    color: '#ffffff'
  }
}

export default connect()(signupScreen);
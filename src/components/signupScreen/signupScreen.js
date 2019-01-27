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
      telephone: '',
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
        telephone: this.state.telephone,
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
          <h1>Register for an Account</h1>
          <div>
            <label htmlFor="first_name">
              First Name:
              <input
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
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="telephone">
              Telephone:
              <input
                type="text"
                name="telephone"
                value={this.state.telephone}
                onChange={this.handleInputChangeFor('telephone')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
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
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '222px',
  }
}

export default connect()(signupScreen);
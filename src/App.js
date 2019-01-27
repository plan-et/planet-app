import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.scss';

// material imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// component imports
import LoginScreen from './components/loginScreen/loginScreen';
import MainScreen from './components/mainScreen/mainScreen';
import LandingScreen from './components/landingScreen/landingScreen';
import CreateEventScreen from './components/createEventScreen/createEventScreen';
import DiscoverScreen from './components/discoverScreen/discoverScreen';
import LargeEventScreen from './components/largeEventScreen/largeEventScreen';
import MyEventsScreen from './components/myEventsScreen/myEventsScreen';
import OverviewScreen from './components/overviewScreen/overviewScreen';
import SignupScreen from './components/signupScreen/signupScreen';
import SmallEventScreen from './components/smallEventScreen/smallEventScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingScreen} />
          <Route path="/main" component={MainScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/createEvent" component={CreateEventScreen} />
          <Route path="/discover" component={DiscoverScreen} />
          <Route path="/largeEvent" component={LargeEventScreen} />
          <Route path="/myEvents" component={MyEventsScreen} />
          <Route path="/overview" component={OverviewScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/smallEvent" component={SmallEventScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
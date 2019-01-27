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
import Prompt1 from './components/createEventScreen/Prompts/Prompt1.js';
import Prompt2_Large from './components/createEventScreen/Prompts/Prompt2.js';
import Prompt3_Large from './components/createEventScreen/Prompts/Prompt3.js';
import Prompt4_Large from './components/createEventScreen/Prompts/Prompt4.js';
import Prompt5_Large from './components/createEventScreen/Prompts/Prompt5.js';
import Prompt6_Large from './components/createEventScreen/Prompts/Prompt6';
import Prompt7_Large from './components/createEventScreen/Prompts/Prompt7.js';
import Prompt8_Large from './components/createEventScreen/Prompts/Prompt8.js';
import Prompt9_Large from './components/createEventScreen/Prompts/Prompt9.js';
import Prompt10_Large from './components/createEventScreen/Prompts/Prompt10.js';
import Prompt11_Large from './components/createEventScreen/Prompts/Prompt11.js';
import Prompt12_Large from './components/createEventScreen/Prompts/Prompt12.js';
import Prompt13_Large from './components/createEventScreen/Prompts/Prompt13.js';
import Prompt14_Large from './components/createEventScreen/Prompts/Prompt14.js';



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

          <Route path = "/1" component = {Prompt1}/>
          <Route path = "/2" component = {Prompt2_Large}/>
          <Route path = "/3" component = {Prompt3_Large}/>
          <Route path = "/4" component = {Prompt4_Large}/>
          <Route path = "/5" component = {Prompt5_Large}/>
          <Route path = "/6" component = {Prompt6_Large}/>
          <Route path = "/7" component = {Prompt7_Large}/>
          <Route path = "/8" component = {Prompt8_Large}/>
          <Route path = "/9" component = {Prompt9_Large}/>
          <Route path = "/10" component = {Prompt10_Large}/>
          <Route path = "/11" component = {Prompt11_Large}/>
          <Route path = "/12" component = {Prompt12_Large}/>
          <Route path = "/13" component = {Prompt13_Large}/>
          <Route path = "/14" component = {Prompt14_Large}/>

        </div>
      </Router>
    );
  }
}

export default App;
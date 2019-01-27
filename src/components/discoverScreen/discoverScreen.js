import './discoverScreen.scss';
import GoogleMapReact from 'google-map-react';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Marker from 'google-map-react';
import React, { Component } from 'react';
export default class discoverScreen extends Component {

  static defaultProps = {
    center: {
      lat: 44.956848,
      lng: -93.162399
    },
    zoom: 11
  };

  render() {
    console.log('here: ', this.props.center)
    return <div className="component-discover-screen">
      <Link to="/main"><span style={{float: 'left', marginTop: '-80%', padding: '3%', color: '#ced2d5'}}><HomeIcon /></span></Link>
      <Link to="/account"><span style={{float: 'right', marginTop: '-80%', padding: '3%', color: '#ced2d5'}}><AccountIcon /></span></Link>
      <div className="yellow" style={{ "padding": "1%", display: 'flexbox' }}>
        <h1 className="center">
          <div style={{ "display": "flex", "justifyContent": "center" }}>
            <img src={require("./Discover-Icon.png")} />
            <span>Discover Events</span>
          </div>
        </h1>
      </div>
      {/* Google Maps */}
      <div style={{ marginTop: '78%', height: '60vh', width: '100%', overflow: 'scroll' }}>
        <Link to="/overview"><GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDxDh_GKLLuYF78nkTnS6jgzow84mNBEJU', language: 'en' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
        </GoogleMapReact>
        </Link>
      </div>
    </div>;
  }
}

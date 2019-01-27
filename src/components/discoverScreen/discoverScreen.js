import './discoverScreen.scss'
import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as discoverScreenActions from "../../store/discoverScreen/actions";
export default class discoverScreen extends Component {
  static defaultProps = {
    center: {
      lat: 44.9537,
      lng: -93.0900
    },
    zoom: 6
  };
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    console.log('here: ', this.props.center)
    return <div className="component-discover-screen">
      <div className="yellow" style={{ "padding": "1%" }}>
        <h1 className="center">
          <div style={{ "display": "flex", "justifyContent": "center" }}>
            <img src={require("./Discover-Icon.png")} />
            <span>Discover Events</span>
          </div>
        </h1>
      </div>

      {/* Google Maps */}
      <div style={{ marginTop: '85%', height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDxDh_GKLLuYF78nkTnS6jgzow84mNBEJU', language: 'en' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    </div>;
  }
}
// export default connect(
//     ({ discoverScreen }) => ({ ...discoverScreen }),
//     dispatch => bindActionCreators({ ...discoverScreenActions }, dispatch)
//   )( discoverScreen );
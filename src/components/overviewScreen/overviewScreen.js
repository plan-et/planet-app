import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './overviewScreen.scss'
import { userInfo } from 'os';
import swal from 'sweetalert';

class overviewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: true,
    };
  }

  deleteEvent = () => {
    console.log('in deleteEvent');
    swal({
      title: "Are you sure you don't want to attend this event?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("You have removed this event!", {
            icon: "success",
          });
        } else {
          swal("Yay! You're still attending!");
        }
      });
  };

  cancelEvent = () => {
    console.log('in deleteEvent');
    swal({
      title: "Are you sure you want to cancel this event?",
      text: "A SMS text message will be sent to all of your guest to be notified of the cancellation.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("You have cancelled this event!", {
            icon: "success",
          });
        } else {
          swal("Yay! Event is still going on!");
        }
      });
  };

  render() {
    let buttons;
    if (!this.state.host) {
      buttons = (
        <div>
          <button style={styles.button3} onClick={() => this.deleteEvent()}>Remove</button>
          <button style={styles.button} onClick={() => this.props.history.push('/main')}>Back</button>
        </div>
      )
    } else {
      buttons = (
        <div>
          <button style={styles.button3} onClick={() => this.cancelEvent()}>Cancel</button>
          <button style={styles.button2}>Edit</button>
          <button style={styles.button} onClick={() => this.props.history.push('/main')}>Back</button>
        </div>
      )
    }
    return (
      <div>
        <Link to="/main"><span style={{ float: 'left', marginTop: '-75%', padding: '3%', color: '#ced2d5' }}><HomeIcon /></span></Link>
        <Link to="/account"><span style={{ float: 'right', marginTop: '-75%', padding: '3%', color: '#ced2d5' }}><AccountIcon /></span></Link>
        <div className="blue" style={{ "padding": "1%", "display": "flex-box" }}>
          <h1 className="center">
            <div style={{ "display": "flex", "justifyContent": "center" }}>
              <span>Hack the Gap</span>
            </div>
          </h1>
        </div>
        <div style={styles.container}>
          <span style={styles.header}>Date: </span>
          <span>Jan 27th, 2019</span>
          <br />
          <span style={styles.header}>Time: </span>
          <span>1:00pm</span>
          <br />
          <span style={styles.header}>Location: </span>
          <span>Glen Nelson Center</span>
          <br />
          <span>370 Wabasha St N #500, St Paul, MN 55102</span>
          <br />
          <span style={styles.header}>Host(s): </span>
          <span>Mai Chee Vang</span>
          <br />
          <span style={styles.header}>Event Description: </span>
          <br />
          <img src={require("./overviewScreen-Icon.png")} style={{ height: '55px' }} />
          <span style={styles.header}>Meeting</span>
          <br />
          <span>
            Hack the Gap is cool! More women in tech should join!
            Hack the Gap is cool! More women in tech should join!
            Hack the Gap is cool! More women in tech should join!
            </span>
          <img src={require("./Map-01.png")} style={{ width: '100%' }} />
        </div>
        <div style={styles.stickToBottom}>
          {buttons}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: '270px',
    backgroundColor: '#ffffff',
    color: '#000000',
    overflow: 'scroll',
    height: '53vh'
  },
  button: {
    backgroundColor: "#00CCB8",
    fontWeight: "bolder",
    width: "100px",
    height: "50px",
    margin: "10px",
    color: '#ffffff'
  },
  button2: {
    backgroundColor: "#FF6B12",
    fontWeight: "bolder",
    width: "100px",
    height: "50px",
    margin: "10px",
    color: '#ffffff'
  },
  button3: {
    backgroundColor: "#E5004B",
    fontWeight: "bolder",
    width: "100px",
    height: "50px",
    margin: "10px",
    color: '#ffffff'
  },
  header: {
    fontWeight: 'bold',
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#ffffff"
  },
}

export default overviewScreen;
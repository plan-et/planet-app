import React, { Component } from 'react';
import './myEventsScreen.scss';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
class myEventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myEventList: [],
    }
  }

  componentWillMount() {
    this.fetchMyEvents();
  }

  fetchMyEvents = () => {
    console.log('in fetchMyEvents');
    //axios get call to get my events data
  }

  render() {
    return (
      <div className="component-my-events-screen">
       <Link to="/main"><span style={{float: 'left', marginTop: '-85%', padding: '3%', color: '#ced2d5'}}><HomeIcon /></span></Link>
      <Link to="/account"><span style={{float: 'right', marginTop: '-85%', padding: '3%', color: '#ced2d5'}}><AccountIcon /></span></Link>
        <div className="red" style={{ "padding": "1%" }}>
          <h1 className="center">
            <div style={{ "display": "flex", "justifyContent": "center" }}>
              <img src={require("./MyEvents-Icon.png")} />
              <span>My Events</span>
            </div>
          </h1>
        </div>
        {/* this is where mapping over the array will occur */}
        <div style={styles.container}>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={require("./winter.jpg")}
                title="Winter Festival"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Winter Carnival
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => this.props.history.push('/overview')}>
                Learn More
              </Button>
              <Button>Jan 28th, 2019</Button>
            </CardActions>
          </Card>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={require("./snowboard.JPG")}
                title="snowboard"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Snowboard Fun
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => this.props.history.push('/overview')}>
                Learn More
              </Button>
              <Button>Feb 2th, 2019</Button>
            </CardActions>
          </Card>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={require("./myEvents-image.png")}
                title="Women in tech"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Women in Tech
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => this.props.history.push('/overview')}>
                Learn More
              </Button>
              <Button>April 15th, 2019</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: '312px',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    height: '53vh',
  },
  card: {
    maxWidth: 345,
    marginLeft: '15px',
    marginBottom: '15px',
  },
  media: {
    height: 140,
  },
}

export default myEventsScreen;
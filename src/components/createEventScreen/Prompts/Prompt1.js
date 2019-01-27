import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_size: null,
            private: false,
        };
    }
    handleRadioButton = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleNextButtonClick = () => {
        console.log('Next button has been clicked');
        //const action = {type: 'ADD_INPUT_4', payload: this.state.input4};
        //console.log(action.type, action.payload);
        //this.props.dispatch(action);
        //this.props.history.push('/2');
    }

    render() {
        let size;
        return <div className="component-prompt">
            <ToggleButtonGroup value={size} exclusive>
                <ToggleButton value="small" variant="contained" style={{ "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "5vh", "fontSize": "18px" }} >
                    Small Event
                </ToggleButton>
                <p style={{ "marginTop": "0px" }}>1-30 guests</p>
                <ToggleButton value="large" variant="contained" style={{ "backgroundColor": "#00CCB8", "width": "65vw", "marginTop": "1vh", "fontSize": "18px" }}>
                    Large
                </ToggleButton>
                <p style={{ "marginTop": "0px" }}>30+ guests</p>
            </ToggleButtonGroup>
            <FormControlLabel
                control={
                    <Switch />
                }
                label={<h4 style={styles.formControlLabel}>Private</h4>}
                color="primary"
            />
        </div>;
    }
}

const styles = {
    formControlLabel: {
        fontSize: '20px',
        color: '#ffffff',
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Prompt1);
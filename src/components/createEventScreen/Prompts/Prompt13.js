import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as createEventScreenActions from "../../store/createEventScreen/actions";
export class Prompt13_Large extends Component {
    constructor(props) {
        super(props);
        this.state = {
          volunteers_needed:'',
        };
    }
    handleRadioButton = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    render() {
        return <div className="component-prompt" style={{"paddingBottom": "5vh"}}>
          <h3 style={{"margin": "2vw"}}>Do you need volunteers for this activity?</h3>
          <FormControl component="fieldset">
<<<<<<< HEAD
          {/* <FormLabel component="legend">Volunteers</FormLabel> */}
=======
          <FormLabel component="legend">Volunteers</FormLabel>
>>>>>>> 1280c28f38314075cf90f972cc7c59695fc78284
          <RadioGroup
            aria-label="Item Status Selector"
            name="Status"
            value={this.state.value}
            onChange={this.handleRadioButton}>>
<<<<<<< HEAD
            <FormControlLabel value="Have" control={<Radio />} label={<h4 style={styles.formControlLabel}>Have</h4>} />
            <FormControlLabel value="Need" control={<Radio />} label={<h4 style={styles.formControlLabel}>Need</h4>} />
            <FormControlLabel value="Not Applicable" control={<Radio />} label={<h4 style={styles.formControlLabel}>Not Applicable</h4>} />
=======
            <FormControlLabel value="Have" control={<Radio />} label="Have" />
            <FormControlLabel value="Need" control={<Radio />} label="Need" />
            <FormControlLabel value="Not Applicable" control={<Radio />} label="Not Applicable" />
>>>>>>> 1280c28f38314075cf90f972cc7c59695fc78284
          </RadioGroup>
        </FormControl>
        </div>;
    }
}
<<<<<<< HEAD
const styles = {
    formControlLabel: {
        fontSize: '20px',
        color: '#ffffff',
    }
}
=======
>>>>>>> 1280c28f38314075cf90f972cc7c59695fc78284
export default Prompt13_Large;
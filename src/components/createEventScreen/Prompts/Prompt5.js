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
export class Prompt5_Large extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment_status: '',
    };
  }
  handleRadioButton = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  render() {
    return <div className="component-prompt" style={{ "paddingBottom": "5vh" }}>
      <h3 style={{ "margin": "2vw" }}>Do you need any extra equipment or supplies, such as chairs, tables, heaters, etc?</h3>
<<<<<<< HEAD
      {/* <h3 style={{ "margin": "2vw" }}>{JSON.stringify(this.state.equipment_status)}</h3> */}
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Equipment</FormLabel> */}
=======
      <h3 style={{ "margin": "2vw" }}>{JSON.stringify(this.state.equipment_status)}</h3>
      <FormControl component="fieldset">
        <FormLabel component="legend">Equipment</FormLabel>
>>>>>>> 1280c28f38314075cf90f972cc7c59695fc78284
        <RadioGroup
          aria-label="Item Status Selector"
          name="equipment_status"
          value={this.state.value}
          onChange={this.handleRadioButton}>
<<<<<<< HEAD
          <FormControlLabel value="Have" control={<Radio />} label={<h4 style={styles.formControlLabel}>Have</h4>} />
          <FormControlLabel value="Need" control={<Radio />} label={<h4 style={styles.formControlLabel}>Need</h4>} />
          <FormControlLabel value="Not Applicable" control={<Radio />} label={<h4 style={styles.formControlLabel}>Not Applicable</h4>} />
=======
          <FormControlLabel value="Have" control={<Radio/>} label="Have" />
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
export default Prompt5_Large;
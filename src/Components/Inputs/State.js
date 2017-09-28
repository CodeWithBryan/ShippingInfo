import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class State extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validation: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  }

  handleValidation() {
    const { value, required, confirm } = this.props;

    // Don't validate if it's not required
    if (!required) { return; }

    if (value === '') {
      this.setState({ validation: 'error' });
      return;
    }

    this.setState({ validation: 'success' });
  }

  render() {
    const { value } = this.props;
    return (
      <FormGroup
        validationState={this.state.validation}
      >
        <ControlLabel>{this.props.placeholder}</ControlLabel>
        <select
          {...this.props}
          onChange={this.handleChange}
          onBlur={this.handleValidation}
          className="input-sm form-control"
        >
          <option value="">Select State</option>
          <option onSelect={this.handleChange} value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="DC">DC</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select>
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

State.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  confirm: PropTypes.string,
};

export default State;

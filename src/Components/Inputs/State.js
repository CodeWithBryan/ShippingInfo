import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, validateField } from 'src/Redux/shippingInfo';

class State extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    const { name, dispatch } = this.props;
    dispatch(updateField(name, e.target.value));
  }

  handleValidation() {
    const { dispatch, value, name } = this.props;
    dispatch(validateField('State', name, value));
  }

  render() {
    const { value, status, submitted, placeholder } = this.props;
    return (
      <FormGroup validationState={status}>
        <ControlLabel>{placeholder}</ControlLabel>
        {submitted ?
          <FormControl.Static>
            {value}
          </FormControl.Static>
        :
          <div>
            <select
              {...this.props}
              onChange={this.handleChange}
              onBlur={this.handleValidation}
              className="input-sm form-control"
            >
              <option value="">Select State</option>
              <option value="AL">AL</option>
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
          </div>
        }
      </FormGroup>
    );
  }
}

State.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name],
    status: state.errors[props.name] ? 'error' : null
  };
}

export default connect(mapStateToProps)(State);

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, validateField } from 'src/Redux/shippingInfo';

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    const { name, dispatch } = this.props;
    let { value } = e.target;

    value = value.split(' ').join('');

    if (!isNaN(value) && value.length <= 10) {
      dispatch(updateField(name, value));
    }
  }

  formatNumber(num) {

    let numArray = num.split('');

    if(num.length > 6) {
      numArray.splice(6, 0, ' ');
    }

    if(num.length > 3) {
      numArray.splice(3, 0, ' ');
    }

    return numArray.join('');
  }

  handleValidation() {
    const { dispatch, submitted, value, name } = this.props;
    dispatch(validateField('Phone', name, value));
  }

  render() {
    const { value, status, submitted, placeholder } = this.props;
    return (
      <FormGroup validationState={status}>
        <ControlLabel>{placeholder}</ControlLabel>
        {submitted ?
          <FormControl.Static>
            {this.formatNumber(value)}
          </FormControl.Static>
        :
          <div>
            <FormControl
              type="text"
              {...this.props}
              value={this.formatNumber(value)}
              className="input-sm"
              onChange={this.handleChange}
              onBlur={this.handleValidation}
            />
            <FormControl.Feedback />
          </div>
        }
      </FormGroup>
    );
  }
}

Phone.propTypes = {
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

export default connect(mapStateToProps)(Phone);

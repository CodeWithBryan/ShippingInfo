import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, requestZip, validateField } from 'src/Redux/shippingInfo';

class Zipcode extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    const { name, dispatch } = this.props;
    const { value } = e.target;

    if (!isNaN(value) && value.length <= 5) {
      dispatch(updateField(name, value));
    }
  }

  handleValidation() {
    const { dispatch, value, name } = this.props;
    dispatch(requestZip(value));
    dispatch(validateField('Zipcode', name, value));
  }

  render() {
    const { value, submitted, status, placeholder } = this.props;
    return (
      <FormGroup validationState={status}>
        <ControlLabel>{placeholder}</ControlLabel>
        {submitted ?
          <FormControl.Static>
            {value}
          </FormControl.Static>
        :
          <div>
            <FormControl
              type="text"
              {...this.props}
              value={value}
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

Zipcode.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name],
    status: state.errors[props.name] ? 'error' : null
  };
}

export default connect(mapStateToProps)(Zipcode);

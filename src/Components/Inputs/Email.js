import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, validateField } from 'src/Redux/shippingInfo';

class Email extends React.Component {
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
    const { dispatch, value, name, submitted } = this.props;
    dispatch(validateField('Email', name, value));
  }

  render() {
    const { value, submitted, status, placeholder } = this.props;

    return (
      <FormGroup
        validationState={status}
      >
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
              className="input-sm"
              onChange={this.handleChange}
              onBlur={this.handleValidation}
              onPaste={(e) => { e.preventDefault(); }}
            />
            <FormControl.Feedback />
          </div>
        }
      </FormGroup>
    );
  }
}

Email.propTypes = {
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

export default connect(mapStateToProps)(Email);

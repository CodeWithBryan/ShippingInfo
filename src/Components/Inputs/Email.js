import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, requestUserData } from 'src/Redux/shippingInfo';

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
    const { dispatch, value, onValidate, name } = this.props;
    dispatch(requestUserData(dispatch, value));
    onValidate(name);
  }

  render() {
    const { status, placeholder } = this.props;

    return (
      <FormGroup
        validationState={status}
      >
        <ControlLabel>{placeholder}</ControlLabel>
        <FormControl
          type="text"
          {...this.props}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={this.handleValidation}
          onPaste={(e) => { e.preventDefault(); }}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Email.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name]
  };
}

export default connect(mapStateToProps)(Email);

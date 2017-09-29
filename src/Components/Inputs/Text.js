import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, validateField } from 'src/Redux/shippingInfo';

class Text extends React.Component {
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
    const { dispatch, value, name, required } = this.props;
    if (required) {
      dispatch(validateField('Text', name, value));
    }
  }

  render() {
    const { status, placeholder } = this.props;
    return (
      <FormGroup validationState={status}>
        <ControlLabel>{placeholder}</ControlLabel>
        <FormControl
          type="text"
          {...this.props}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Text.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name],
    status: state.errors[props.name] ? 'error' : null
  };
}

export default connect(mapStateToProps)(Text);

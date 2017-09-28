import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Email extends React.Component {
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
    const { value, required } = this.props;
    const regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    // Don't validate if it's not required
    if (!required) { return; }

    if (value.length < 1) {
      this.setState({ validation: 'error' });
      return;
    }

    if(!regex.test(value)) {
      this.setState({ validation: 'error' });
      return;
    }

    this.setState({ validation: 'success' });
  }

  render() {
    return (
      <FormGroup
        validationState={this.state.validation}
      >
        <ControlLabel>{this.props.placeholder}</ControlLabel>
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Email;

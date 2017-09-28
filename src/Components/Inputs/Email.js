import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Email extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  }

  handleValidation() {
    const { onValidate, name } = this.props;
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Email;

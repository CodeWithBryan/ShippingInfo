import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Name extends React.Component {
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

    // Don't validate if it's not required
    if (!required) { return; }

    if (value.length < 1) {
      this.setState({ validation: 'error' });
    } else {
      this.setState({ validation: 'success' });
    }
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
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Name.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Name;

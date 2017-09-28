import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Zipcode extends React.Component {
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
    let { value } = e.target;

    if (!isNaN(value) && value.length <= 5) {
      onChange(e.target.name, value);
    }
  }

  handleValidation() {
    const { onValidate, required } = this.props;
    if (required) {
      if (onValidate()) {
        this.setState({ validation: 'error' });
      } else {
        this.setState({ validation: 'success' });
      }
    }
  }

  render() {
    const { value } = this.props;
    return (
      <FormGroup
        validationState={this.state.validation}
      >
        <ControlLabel>{this.props.placeholder}</ControlLabel>
        <FormControl
          type="text"
          {...this.props}
          value={value}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Zipcode.propTypes = {
  onValidate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Zipcode;

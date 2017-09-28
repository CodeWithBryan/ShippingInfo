import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Phone extends React.Component {
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

    value = value.split(' ').join('');

    if (!isNaN(value) && value.length <= 10) {
      onChange(e.target.name, value);
    }
  }

  handleValidation() {
    const { value, required } = this.props;

    const tempValue = value.replace(' ', '');

    // Don't validate if it's not required
    if (!required) { return; }

    if (tempValue.length !== 10) {
      this.setState({ validation: 'error' });
      return;
    }

    this.setState({ validation: 'success' });
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
          value={this.formatNumber(value)}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Phone.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Phone;

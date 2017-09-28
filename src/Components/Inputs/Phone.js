import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    let { value } = e.target;

    value = value.split(' ').join('');

    if (!isNaN(value) && value.length <= 10) {
      onChange(e.target.name, value);
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

  render() {
    const { value, status, onValidate } = this.props;
    return (
      <FormGroup
        validationState={status}
      >
        <ControlLabel>{this.props.placeholder}</ControlLabel>
        <FormControl
          type="text"
          {...this.props}
          value={this.formatNumber(value)}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={onValidate}
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

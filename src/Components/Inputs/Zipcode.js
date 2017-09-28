import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Zipcode extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    let { value } = e.target;

    if (!isNaN(value) && value.length <= 5) {
      onChange(e.target.name, value);
    }
  }

  render() {
    const { value, status, placeholder, onValidate } = this.props;
    return (
      <FormGroup validationState={status}>
        <ControlLabel>{placeholder}</ControlLabel>
        <FormControl
          type="text"
          {...this.props}
          value={value}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={onValidate}
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

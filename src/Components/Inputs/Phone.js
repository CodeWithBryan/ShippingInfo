import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField } from 'src/Redux/shippingInfo';

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, dispatch } = this.props;
    let { value } = e.target;

    value = value.split(' ').join('');

    if (!isNaN(value) && value.length <= 10) {
      dispatch(updateField(name, value));
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name]
  };
}

export default connect(mapStateToProps)(Phone);

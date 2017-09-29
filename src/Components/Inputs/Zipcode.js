import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField, requestZip } from 'src/Redux/shippingInfo';

class Zipcode extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    const { name, dispatch } = this.props;
    const { value } = e.target;

    if (!isNaN(value) && value.length <= 5) {
      dispatch(updateField(name, value));
    }
  }

  handleBlur() {
    const { dispatch, onValidate, value } = this.props;
    dispatch(requestZip(value));
    onValidate();
  }

  render() {
    const { value, status, placeholder } = this.props;
    return (
      <FormGroup validationState={status}>
        <ControlLabel>{placeholder}</ControlLabel>
        <FormControl
          type="text"
          {...this.props}
          value={value}
          className="input-sm"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Zipcode.propTypes = {
  onValidate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name]
  };
}

export default connect(mapStateToProps)(Zipcode);

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField } from 'src/Redux/shippingInfo';

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
    const { onValidate, name } = this.props;
    onValidate(name);
  }

  render() {
    const { onValidate, status, placeholder } = this.props;
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
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

Text.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name]
  };
}

export default connect(mapStateToProps)(Text);

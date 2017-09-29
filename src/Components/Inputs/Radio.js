import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ToggleButton, ToggleButtonGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateField } from 'src/Redux/shippingInfo';
import styled from 'styled-components';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, dispatch } = this.props;
    dispatch(updateField(name, e));
  }

  render() {
    const { className, placeholder, submitted, value } = this.props;

    return (
      <ButtonToolbar className={`${className} pull-left`}>
        <ControlLabel>{placeholder}</ControlLabel>
        {submitted ?
          <FormControl.Static>
            {value ? 'Residential' : 'Commercial'}
          </FormControl.Static>
        :
          <div>
            <br />
            <ToggleButtonGroup type="radio" name="options" defaultValue={true} onChange={this.handleChange}>
              <ToggleButton className="btn-sm" value={true}>Residential</ToggleButton>
              <ToggleButton className="btn-sm" value={false}>Commercial</ToggleButton>
            </ToggleButtonGroup>
          </div>
        }
      </ButtonToolbar>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
};

function mapStateToProps(state, props) {
  return {
    value: state[props.name]
  };
}

export default styled(connect(mapStateToProps)(Radio))`
  margin-bottom: 20px;
`;

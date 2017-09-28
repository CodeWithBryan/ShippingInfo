import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ToggleButton, ToggleButtonGroup, ControlLabel } from 'react-bootstrap';
import styled from 'styled-components';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    onChange(name, e);
  }

  render() {
    const { className } = this.props;

    return (
      <ButtonToolbar className={`${className} pull-left`}>
        <ControlLabel>{this.props.placeholder}</ControlLabel>
        <br />
        <ToggleButtonGroup type="radio" name="options" defaultValue={true} onChange={this.handleChange}>
          <ToggleButton className="btn-sm" value={true}>Residential</ToggleButton>
          <ToggleButton className="btn-sm" value={false}>Commercial</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

Radio.defaultProps = {
};

export default styled(Radio)`
  margin-bottom: 20px;
`;

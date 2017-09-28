import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';
import Name from 'src/Components/Inputs/Name';
import Email from 'src/Components/Inputs/Email';
import Phone from 'src/Components/Inputs/Phone';
import State from 'src/Components/Inputs/State';
import Zipcode from 'src/Components/Inputs/Zipcode';
import Radio from 'src/Components/Inputs/Radio';

/*
 *  This Component handles the page structure of the Shipping Form,
 *  along with the actual input state
 */

class ShippingInfoRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      residential: true,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      emailConfirm: '',
      address: '',
      secondAddress: '',
      state: '',
      city: '',
      zipcode: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleZipValidation = this.handleZipValidation.bind(this);
    this.handleStateValidation = this.handleStateValidation.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleZipValidation() {
    const { zipcode } = this.state;
    const zip = /^\d{5}(-\d{4})?$/;

    if (zipcode.length !== 5) {
      return true;
    }

    if(!zip.test(zipcode)) {
      return true;
    }

    return false;
  }

  handleStateValidation() {
    const { state } = this.state;
    if (state === '') {
      return true;
    }

    return false;
  }

  render() {
    const { className } = this.props;
    const { residential } = this.state;

    return (
      <div className={className}>

        <Col xs={12} sm={8} smOffset={2}>
          <h3 className="text-center">Shipping Address</h3>
          <hr />

          <Col xs={12}>
            <Radio
              required
              name="residential"
              placeholder="Address Type"
              onChange={this.handleChange}
            />
          </Col>
          <Col xs={6}>
            <Email
              required
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={6}>
            <Email
              required
              name="emailConfirm"
              placeholder="Confirm Email"
              value={this.state.emailConfirm}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={6}>
            <Name
              required
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={6}>
            <Name
              required
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={6}>
            <Phone
              required
              name="phone"
              placeholder="Mobile Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Col>


          <Col xs={6}>
            {residential ? null :
              <Name
                required
                name="company"
                placeholder="Company Name"
                value={this.state.company}
                onChange={this.handleChange}
              />
            }
          </Col>

          <Col xs={12}>
            <Name
              required
              name="address"
              placeholder="Address 1"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={12}>
            <Name
              required
              name="secondAddress"
              placeholder="Address 2"
              value={this.state.secondAddress}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={12} sm={4}>
            <State
              required
              name="state"
              placeholder="State"
              value={this.state.state}
              onChange={this.handleChange}
              onValidate={this.handleStateValidation}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Name
              required
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Zipcode
              required
              name="zipcode"
              placeholder="Zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
              onValidate={this.handleZipValidation}
            />
          </Col>

          <Col xs={12}>
            <Button bsStyle="primary" className="pull-right">Continue</Button>
          </Col>

        </Col>
      </div>
    );
  }
}

ShippingInfoRoute.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ShippingInfoRoute)`
background: #fff;
padding: 30px;
`;

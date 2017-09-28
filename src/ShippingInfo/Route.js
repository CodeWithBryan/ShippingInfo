import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';
import Text from 'src/Components/Inputs/Text';
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
      errors: {
        residential: false,
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        company: false,
        emailConfirm: false,
        address: false,
        secondAddress: false,
        state: false,
        city: false,
        zipcode: false,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleZipValidation = this.handleZipValidation.bind(this);
    this.handleTextValidation = this.handleTextValidation.bind(this);
    this.handleStateValidation = this.handleStateValidation.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handlePhoneValidation = this.handlePhoneValidation.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  toggleError(name, value) {
    this.setState({
      errors: Object.assign({}, this.state.errors, { [name]: value })
    });
  }

  handleZipValidation() {
    const { zipcode } = this.state;
    const zip = /^\d{5}(-\d{4})?$/;

    if (zipcode.length !== 5) {
      this.toggleError('zipcode', true);
      return;
    }

    if(!zip.test(zipcode)) {
      this.toggleError('zipcode', true);
      return;
    }

    this.toggleError('zipcode', false);
  }

  handleStateValidation() {
    const { state } = this.state;
    if (state === '') {
      this.toggleError('state', true);
      return;
    }

    this.toggleError('state', false);
  }

  handlePhoneValidation() {
    const { phone } = this.state;

    if (phone.length !== 10) {
      this.toggleError('phone', true);
      return;
    }

    this.toggleError('phone', false);
  }

  handleEmailValidation(field) {
    const regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (this.state[field].length < 1) {
      this.toggleError(field, true);
      return;
    }

    if(!regex.test(this.state[field])) {
      this.toggleError(field, true);
      return;
    }

    this.toggleError(field, false);
  }

  handleTextValidation(field) {
    if (this.state[field].length < 1) {
      console.log(field, true);
      this.toggleError(field, true);
      return;
    }

    this.toggleError(field, false);
  }

  render() {
    const { className } = this.props;
    const { residential, errors } = this.state;

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
              onChange={this.handleChange}
              onValidate={this.handleEmailValidation}
              status={errors.email ? 'error' : null}
            />
          </Col>

          <Col xs={6}>
            <Email
              required
              name="emailConfirm"
              placeholder="Confirm Email"
              onChange={this.handleChange}
              onValidate={this.handleEmailValidation}
              status={errors.emailConfirm ? 'error' : null}
            />
          </Col>

          <Col xs={6}>
            <Text
              required
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
              onValidate={this.handleTextValidation}
              status={errors.firstName ? 'error' : null}
            />
          </Col>

          <Col xs={6}>
            <Text
              required
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
              onValidate={this.handleTextValidation}
              status={errors.lastName ? 'error' : null}
            />
          </Col>

          <Col xs={6}>
            <Phone
              required
              name="phone"
              placeholder="Mobile Phone"
              value={this.state.phone}
              onChange={this.handleChange}
              onValidate={this.handlePhoneValidation}
              status={errors.phone ? 'error' : null}
            />
          </Col>


          <Col xs={6}>
            {residential ? null :
              <Text
                required
                name="company"
                placeholder="Company Name"
                value={this.state.company}
                onChange={this.handleChange}
                onValidate={this.handleTextValidation}
                status={errors.company ? 'error' : null}
              />
            }
          </Col>

          <Col xs={12}>
            <Text
              required
              name="address"
              placeholder="Address 1"
              value={this.state.address}
              onChange={this.handleChange}
              onValidate={this.handleTextValidation}
              status={errors.address ? 'error' : null}
            />
          </Col>

          <Col xs={12}>
            <Text
              required
              name="secondAddress"
              placeholder="Address 2"
              value={this.state.secondAddress}
              onChange={this.handleChange}
              onValidate={this.handleTextValidation}
              onValidate={() => {}}
              status={null}
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
              status={errors.state ? 'error' : null}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Text
              required
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChange}
              onValidate={this.handleTextValidation}
              status={errors.city ? 'error' : null}
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
              status={errors.zipcode ? 'error' : null}
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

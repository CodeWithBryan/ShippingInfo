import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import Text from 'src/Components/Inputs/Text';
import Email from 'src/Components/Inputs/Email';
import Phone from 'src/Components/Inputs/Phone';
import State from 'src/Components/Inputs/State';
import Zipcode from 'src/Components/Inputs/Zipcode';
import Radio from 'src/Components/Inputs/Radio';
import ProductList from 'src/Components/ProductList';
import { validateAllFields } from 'src/Redux/shippingInfo';

/*
 *  This Component handles the page structure of the Shipping Form,
 *  along with the actual input state
 */

class ShippingInfoRoute extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch, data } = this.props;
    let tempData = data;
    delete tempData.errors;

    e.preventDefault();

    dispatch(validateAllFields(tempData));
  }

  render() {
    const { className, residential, submitted, errorCount } = this.props;

    return (
      <div className={className}>

        <Col xs={12} sm={8} smOffset={2}>
          <ProductList />
        </Col>

        <Col xs={12} sm={8} smOffset={2}>
          <hr />
          <h3 className="text-center">Shipping Address</h3>
          <hr />

          {submitted ?
            <Col xs={12}>
              <Alert bsStyle="success">
                <strong>Success</strong> We've got your information!
              </Alert>
            </Col>
          : null}

          {errorCount > 0 ?
            <Col xs={12}>
              <Alert bsStyle="danger">
                <strong>{errorCount} Errors!</strong> Please re-check your information.
              </Alert>
            </Col>
          : null}

          <Col xs={12}>
            <Radio
              required
              name="residential"
              placeholder="Address Type"
              submitted={submitted}
            />
          </Col>
          <Col xs={6}>
            <Email
              required
              name="email"
              placeholder="Email"
              submitted={submitted}
            />
          </Col>

          <Col xs={6}>
            <Email
              required
              name="emailConfirm"
              placeholder="Confirm Email"
              submitted={submitted}
            />
          </Col>

          <Col xs={6}>
            <Text
              required
              name="firstName"
              placeholder="First Name"
              submitted={submitted}
            />
          </Col>

          <Col xs={6}>
            <Text
              required
              name="lastName"
              placeholder="Last Name"
              submitted={submitted}
            />
          </Col>

          <Col xs={6}>
            <Phone
              required
              name="phone"
              placeholder="Mobile Phone"
              submitted={submitted}
            />
          </Col>


          <Col xs={6}>
            {residential ? null :
              <Text
                required
                name="company"
                placeholder="Company Name"
                submitted={submitted}
              />
            }
          </Col>

          <Col xs={12}>
            <Text
              required
              name="address"
              placeholder="Address 1"
              submitted={submitted}
            />
          </Col>

          <Col xs={12}>
            <Text
              name="secondAddress"
              placeholder="Address 2"
              submitted={submitted}
            />
          </Col>

          <Col xs={12} sm={4}>
            <State
              required
              name="state"
              placeholder="State"
              submitted={submitted}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Text
              required
              name="city"
              placeholder="City"
              submitted={submitted}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Zipcode
              required
              name="zipcode"
              placeholder="Zipcode"
              submitted={submitted}
            />
          </Col>

          <Col xs={12}>
            <Button
              bsStyle="primary"
              className="pull-right"
              onClick={this.handleSubmit}
              disabled={submitted}
            >Submit</Button>
          </Col>

        </Col>
      </div>
    );
  }
}

ShippingInfoRoute.propTypes = {
  className: PropTypes.string.isRequired,
  residential: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state,
    errors: state.errors,
    residential: state.residential,
    submitted: state.submitted,
    errorCount: state.errors.errorCount
  }
}

export default styled(connect(mapStateToProps)(ShippingInfoRoute))`
background: #fff;
padding: 30px;
`;

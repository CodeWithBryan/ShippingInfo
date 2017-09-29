import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Text from 'src/Components/Inputs/Text';
import Email from 'src/Components/Inputs/Email';
import Phone from 'src/Components/Inputs/Phone';
import State from 'src/Components/Inputs/State';
import Zipcode from 'src/Components/Inputs/Zipcode';
import Radio from 'src/Components/Inputs/Radio';
import ProductList from 'src/Components/ProductList';

/*
 *  This Component handles the page structure of the Shipping Form,
 *  along with the actual input state
 */

class ShippingInfoRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitting: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submitting: true
    });
  }

  render() {
    const { className, residential } = this.props;
    const { submitting } = this.state;

    return (
      <div className={className}>

        <Col xs={12} sm={8} smOffset={2}>
          <ProductList />
        </Col>

        <Col xs={12} sm={8} smOffset={2}>
          <hr />
          <h3 className="text-center">Shipping Address</h3>
          <hr />

          <Col xs={12}>
            <Radio
              required
              name="residential"
              placeholder="Address Type"
              disabled={submitting}
            />
          </Col>
          <Col xs={6}>
            <Email
              required
              name="email"
              placeholder="Email"
              disabled={submitting}
            />
          </Col>

          <Col xs={6}>
            <Email
              required
              name="emailConfirm"
              placeholder="Confirm Email"
              disabled={submitting}
            />
          </Col>

          <Col xs={6}>
            <Text
              required
              name="firstName"
              placeholder="First Name"
              disabled={submitting}
            />
          </Col>

          <Col xs={6}>
            <Text
              required
              name="lastName"
              placeholder="Last Name"
              disabled={submitting}
            />
          </Col>

          <Col xs={6}>
            <Phone
              required
              name="phone"
              placeholder="Mobile Phone"
              disabled={submitting}
            />
          </Col>


          <Col xs={6}>
            {residential ? null :
              <Text
                required
                name="company"
                placeholder="Company Name"
                disabled={submitting}
              />
            }
          </Col>

          <Col xs={12}>
            <Text
              required
              name="address"
              placeholder="Address 1"
              disabled={submitting}
            />
          </Col>

          <Col xs={12}>
            <Text
              required
              name="secondAddress"
              placeholder="Address 2"
              disabled={submitting}
            />
          </Col>

          <Col xs={12} sm={4}>
            <State
              required
              name="state"
              placeholder="State"
              disabled={submitting}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Text
              required
              name="city"
              placeholder="City"
              disabled={submitting}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Zipcode
              required
              name="zipcode"
              placeholder="Zipcode"
              disabled={submitting}
            />
          </Col>

          <Col xs={12}>
            <Button
              bsStyle="primary"
              className="pull-right"
              onClick={this.handleSubmit}
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
};

function mapStateToProps(state) {
  return {
    residential: state.residential
  }
}

export default styled(connect(mapStateToProps)(ShippingInfoRoute))`
background: #fff;
padding: 30px;
`;

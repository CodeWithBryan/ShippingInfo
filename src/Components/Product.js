import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

class Product extends React.Component {
  render() {
    const { className, picture, name, bottleCount, price } = this.props;
    return (
      <div className={className}>
        <Col xs={12} sm={6}>
          <img src={`https://www.wsjwine.com/${picture}`} className="img-responsive" />
        </Col>
        <Col xs={12} sm={6}>
          <h3>
            {name}
            <br />
            <small>{bottleCount} bottles for ${price}</small>
          </h3>
        </Col>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bottleCount: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Product)`
  text-align: right;

  .product-image {
    width: 200px;
    float: left;
  }
`;

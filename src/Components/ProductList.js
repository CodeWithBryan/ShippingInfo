import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestProducts } from 'src/Redux/shippingInfo';
import Product from 'src/Components/Product';

class ProductList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(requestProducts());
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.filter(item => item.product.colourId === 'Red').map(item => (
          <Product
            key={item.itemCode}
            name={item.product.name}
            picture={item.product.largeImage}
            price={item.listPrice}
            bottleCount={item.product.skus[0].numberOfBottles}
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products
  }
};

export default connect(mapStateToProps)(ProductList);

import React from 'react';
import { Route, Link } from 'react-router-dom';
import ShippingInfoRoute from 'src/ShippingInfo/Route';

class AppRoute extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Shipping Info</Link>
          <Link to="/list">List</Link>
        </nav>
        <div>
          <Route exact path="/" component={ShippingInfoRoute} />
          <Route exact path="/list" component={ShippingInfoRoute} />
        </div>
      </div>
    );
  }
}

export default AppRoute;

import React from 'react';
import { Route } from 'react-router-dom';
import ShippingInfoRoute from 'src/ShippingInfo/Route';
import AppNav from 'src/App/AppNav';
import { Grid } from 'react-bootstrap';

class AppRoute extends React.Component {
  render() {
    return (
      <Grid fluid>
        <AppNav />
        <div>
          <Route exact path="/" component={ShippingInfoRoute} />
          <Route exact path="/list" component={ShippingInfoRoute} />
        </div>
      </Grid>
    );
  }
}

export default AppRoute;

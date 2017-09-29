import React from 'react';
import { Route } from 'react-router-dom';
import ShippingInfoRoute from 'src/ShippingInfo/Route';
import AppNav from 'src/App/AppNav';
import { Grid, Row, Col } from 'react-bootstrap';

class AppRoute extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <AppNav />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <div>
              <Route exact path="/" component={ShippingInfoRoute} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AppRoute;

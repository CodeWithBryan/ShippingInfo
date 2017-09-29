import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RouteNavItem from "src/Components/RouteNavItem";


class AppNav extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Shipping Info Collection</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <RouteNavItem href="/">Shipping Info</RouteNavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNav;

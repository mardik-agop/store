import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../contextAPI';
import {Navbar, Nav} from 'react-bootstrap';

class Navig extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" style={{background: "#583d72"}}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/"  style={{color: "#fff", textDecoration: "none"}}>Products</Link>
            </Nav>
            <Nav>
              <ProductConsumer>
                {(value) => {
                  return <Link style={{color: "mediumspringgreen"}} eventkey={2} to="/cart">
                    My Cart ({value.cart.length})
                  </Link>
                }}
              </ProductConsumer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Navig;
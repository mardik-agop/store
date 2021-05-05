import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Button} from 'react-bootstrap';
import {ProductConsumer} from '../contextAPI';

class Product extends Component {
  render() {

    const {id, title, img, price, inCart} = this.props.product;

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 mainCard">
        <ProductConsumer>
          {(value) => {
            return(
              <Card onClick={() => {value.handleDetails(id)}} style={{width: "18rem", height: "18rem"}}>
              <Link to="/details">
                <Card.Img variant="top" src={img}/>
              </Link>
              <Card.Body>
                <Card.Title className="title">{title}</Card.Title>
              </Card.Body>
              <Card.Footer className="cardFooter" style={{background: "#583d72"}}>
                <Row>
                  <Col>
                    <Button size="sm" disabled={inCart} style={{background: "#fff", color: "#000"}} onClick={() => {value.addToCart(id)}}>
                    {inCart === true ? "In Cart" : "Add To Cart"}
                  </Button>
                  </Col>
                  <Col>
                    <small className="text-muted text-right price" style={{color: "#fff"}}>{price}$</small>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            )
          }}
        </ProductConsumer>
      </div>
    )
  }
}
export default Product;
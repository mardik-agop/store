import React, { Component } from 'react'
import {ProductConsumer} from '../contextAPI';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, title, img, info, price, company, inCart} = value.detailProduct;
          return(
            <div className="container">
              <div className="col-10 mx-auto text-center">
                <h1>Your Projects Details</h1>
              </div>
              <div className="row">
                <div className="col-4 mx-auto col-md-4">
                  <img src={img} className="img-fluid"/>
                </div>
              </div>
              <div className="row">
                <div className="col-4 mx-auto col-md-4">
                  <h4>Model: {title}</h4>
                  <h5><strong>Price: {price}$</strong></h5>
                  <p>Some information about the project: </p>
                  <p>{info}</p>
                  <div>
                    <Link to="/">Back Home</Link>
                  </div>
                  <Button size="sm" disabled={inCart} onClick={() => {value.addToCart(id)}}>
                    {inCart === true ? "In Cart" : "Add To Cart"}
                  </Button>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
export default Details;
import React, { Component } from 'react'
import {dataProducts, detailProduct} from './appData';

const ProductContext = React.createContext();

console.log(dataProducts);

class ProductProvider extends Component {

  state = {
    products: dataProducts,
    detailProduct: detailProduct,
    cart: [],
    cartSubtotal: 0
  }

  // GET ITEM
  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product
  }

  // HANDLEDETAILS
  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product
    })
  }

  // ADDTOCART
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {products: tempProduct, cart: [...this.state.cart, product]}
    }, () => {this.makeTotal()}
    )
  }

  // DECREMENT
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    product.total = product.count * product.price;
    
    this.setState(() => {
      return {cart: [...tempCart]}
    }, () => {
      this.makeTotal();
    })
  }

  // INCREMENT
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    
    this.setState(() => {
      return {cart: [...tempCart]}
    }, () => {
      this.makeTotal();
    })
  }

  makeTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const total = subTotal;
    this.setState(() => {
      return{
        cartSubtotal: subTotal
      }
    })
  }

  // REMOVE
  removeItem = (id) => {
    let temoProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = temoProduct.indexOf(this.getItem(id));

    let removeProd = temoProduct[index];

    removeProd.inCart = false;
    removeProd.total = 0;
    removeProd.count = 0;

    this.setState(() => {
      return{
        cart: [...tempCart],
        product: [...temoProduct]
      }
    }, () => {
      return this.makeTotal();
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetails: this.handleDetails,
        addToCart: this.addToCart,
        decrement: this.decrement,
        increment: this.increment,
        removeItem: this.removeItem,
        makeTotal: this.makeTotal
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}; 
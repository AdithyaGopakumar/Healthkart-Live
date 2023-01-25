import React, { useState } from "react";
import "./cart.css";
import Extras from "../Elements/extras";
import "../Elements/extras.css";
import { Link } from "react-router-dom";
import Header from "../HeaderFooter/header";

class Cart extends React.Component {
  constructor(props) {
    // console.log(props.cart, "this is cart in cart");
    super(props);

    this.state = {
      total: "",
      currCart: this.props.cart,
    };
  }
  orderCart = [];

  renderCart = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="ind-item container" key={item.id}>
            <img
              src={item.image}
              alt={item.product_name}
              className="cart-item-img"
            />
            <div className="cart-item-data">
              <p className="cart-item-name">{item.product_name}</p>
              <div className="cart-price-flex">
                <span className="cart-item-price">₹ {item.sell_price}</span>
                <span className="cart-item-offer">{item.offer}% OFF</span>
              </div>
              <div>
                <span className="cart-item-mrp-text">MRP: </span>
                <span className="cart-item-old-price">₹ {item.old_price}</span>
              </div>
            </div>
            <button
              className="remove-item"
              onClick={() => {
                this.props.removeFromCart(item);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
          // <div key={item.id} className="col-md-6">
          //   <div className="cart-single-item ">
          //     <img
          //       className="cart-img"
          //       src={item.image}
          //       alt={item.product_name}
          //     />
          //     <span className="cart-item-name">{item.product_name}</span>- Rs
          //     {item.sell_price}
          //   </div>
          //   <div className="col-md-4">
          //     <button
          //       className="remove-item-btn btn btn-danger"
          //       onClick={() => {
          //         this.props.removeFromCart(item);
          //       }}
          //     >
          //       <span className="remove-text">Remove From Cart</span>
          //     </button>
          //   </div>
          // </div>
        );
      });
    }
  };

  render() {
    let getTotal = this.state.currCart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    let getMRP = this.state.currCart.reduce((acc, curr) => {
      return acc + curr.old_price;
    }, 0);
    let discount = getMRP - getTotal;
    // console.log(getTotal, "the total", getMRP, discount);
    return (
      <>
        <Header />
        <div className="container brands-and-category">
          <h1 className="cart-heading heading-text">
            Shopping Cart ({this.state.currCart.length} items)
          </h1>
          <section className="cart">
            <div className="container">
              <div className="row">
                <div className="col col-md-7">
                  <div className="shopping-cart">
                    {/* <h1 className="cart-heading">
                      Shopping Cart ({this.state.currCart.length} items)
                    </h1> */}
                    <>{this.renderCart(this.state.currCart)}</>
                  </div>
                </div>
                <div className="col col-md-5">
                  <div className="order-summary">
                    <span className="summary">Order Summary</span>
                    <span className="number-of-items">
                      ({this.state.currCart.length} items)
                    </span>
                    <div className="total-mpr flex mt-5">
                      <span className="price-text">Total MRP</span>
                      <span className="mrp">₹ {getMRP}</span>
                    </div>
                    <div className="total-discounts flex">
                      <span className="price-text">Total Discounts</span>
                      <span className="discount">-₹ {discount}</span>
                    </div>
                    <div className="shipping-charge flex">
                      <span className="price-text">Shipping Charges</span>
                      <span className="free">FREE</span>
                    </div>
                    <hr />
                    <div className="payable-amount flex">
                      <span className="price-text-bold">Payable Amount</span>
                      <span className="pay-rate">₹ {getTotal}</span>
                    </div>
                    <p className="show-savings">
                      You will Save ₹ {discount} & Eligible for Free Shipping on
                      this order
                    </p>
                    {/* <button class="proceed-btn">
                    Proceed to Pay ₹ {getTotal}
                  </button> */}
                    <Link to="/placeOrder" className="proceed-btn">
                      Proceed to Pay ₹ {getTotal}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Extras />
      </>
    );
  }
}

export default Cart;

import React from "react";
import "../orders/placeOrder.css";
import Header from "../HeaderFooter/header";
import Extras from "../Elements/extras";
import Advert from "../Elements/advert";
// import axios from "axios";
const URL = "https://healthkart-render-api-production.up.railway.app/cart";
// const URL = "http://localhost:8700/cart";

// const orderURL = "https://healthkart-render-api.onrender.com/placeOrder";
const orderURL =
  "https://healthkart-render-api-production.up.railway.app/placeOrder";

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);

    let sessionData = sessionStorage.getItem("userData")
      ? sessionStorage.getItem("userData").split(",")
      : [];

    // let sessionData
    this.state = {
      order_id: Math.floor(Math.random() * 10000),
      user: sessionData ? sessionData[0] : "",
      email: sessionData ? sessionData[1] : "",
      address: "",
      phone: "",
      total: 0,
      items: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.props);
  };

  checkOut = (e) => {
    e.preventDefault();
    let obj = this.state;
    fetch(orderURL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(console.log("orderplaced"));
    // .then(this.props.history.push("viewOrders"));
  };

  renderCart = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="order-cart-list col col-md-3" key={item.id}>
            <img
              className="order-cart-img"
              src={item.image}
              alt={item.product_name}
            />
            <h4 className="order-cart-name">{item.product_name}</h4>
            <h5 className="order-cart-price">Rs. {item.sell_price}</h5>
          </div>
        );
      });
    }
  };

  render() {
    // console.log(this.props.cart);
    // console.log(total);
    let total = this.props.cart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    return (
      <>
        <Header />
        <div className="container">
          <div className="panel panel-primary">
            <h1 className="panel-heading order-heading my-5">
              Confirm Your Orders
            </h1>
            <div className="panel-body">
              <form
                // onSubmit={this.checkOut}
                action="http://localhost:4100/paynow"
                method="POST"
              >
                {/* <form> */}
                <input
                  type="hidden"
                  name="order_id"
                  value={this.state.order_id}
                />
                <input type="hidden" name="total" value={this.state.total} />
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="user" className="control-label input-txt">
                      Your Name
                    </label>
                    <input
                      className="form-control input-box"
                      id="user"
                      name="user"
                      value={this.state.user}
                      onChange={this.handleChange}
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email" className="control-label input-txt">
                      Email
                    </label>
                    <input
                      className="form-control input-box"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="address"
                      className="control-label input-txt"
                    >
                      Address
                    </label>
                    <input
                      className="form-control input-box"
                      id="address"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="phone" className="control-label input-txt">
                      Phone
                    </label>
                    <input
                      className="form-control input-box"
                      id="phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      placeholder="Enter Your Mobile Number"
                    />
                  </div>
                </div>
                <h2 className="order-cart-heading">Products From Your Cart</h2>
                <div className="row">{this.renderCart(this.props.cart)}</div>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="order-total">Your Total : Rs.{total}</h2>
                  </div>
                </div>
                <button
                  className="check-out-btn"
                  // onClick={this.checkOut}
                  type="submit"
                >
                  Check Out
                </button>
              </form>
              <button className="check-out-btn" onClick={this.checkOut}>
                place
              </button>
            </div>
          </div>
        </div>
        <Advert />
        <Extras />
      </>
    );
  }

  componentDidMount() {
    // let orders = this.props.cart;
    // console.log(orders, "this is orders");
    // fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orders),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "this is in db");
    //   });
    this.setState({ items: this.props.cart });
    let total = this.props.cart.reduce((acc, curr) => {
      return acc + curr.sell_price;
    }, 0);
    this.setState({ total: total });
    console.log(this.state, "this is state");
  }
}

export default PlaceOrder;

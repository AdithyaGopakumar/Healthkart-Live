import React from "react";
import { Link, withRouter } from "react-router-dom";
import Cart from "../cart/cart";
// import AppRouter from "../Routing";

const getUserUrl = "http://localhost:5000/api/auth/userInfo";
// let cartItems = sessionStorage.getItem("cart");
// console.log(cartItems);

const orderApi = "http://localhost:8700/orders";

let sessionData = sessionStorage.getItem("userData")
  ? sessionStorage.getItem("userData").split(",")
  : [];

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userData: "",
    };
  }

  handleLogOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    // console.log(this.state.userData, "data after logout");
    this.setState({ userData: "" });
    this.props.history.push("/");
  };

  conditionalHeader = () => {
    if (this.state.userData.auth === false || this.state.userData === "") {
      // console.log(this.state.userData, "form if");
      return (
        <>
          <Link className="header-link" to="#">
            My Accounts & Orders
          </Link>
          <Link className="header-link" to={"/register"}>
            Register
          </Link>
          <Link className="header-link" to={"/login"}>
            Login
          </Link>
        </>
      );
    } else {
      // console.log(this.state.userData, "form else");
      let data = this.state.userData;
      let outArr = [data.name, data.email];
      console.log(outArr);
      sessionStorage.setItem("userData", outArr);
      return (
        <>
          <Link className="header-link" to="#">
            My Accounts & Orders
          </Link>
          <Link className="header-link" to={"/"}>
            Welcome {this.state.userData.name.split(" ")[0]}
          </Link>
          <button className="logout-btn" onClick={this.handleLogOut}>
            Logout
          </button>
          <Link className="header-link" to="/cart">
            <div className="cart-icn">
              <ion-icon name="cart-outline"></ion-icon>
              <span className="cart-item-number">
                {sessionStorage.getItem("cart")}
              </span>
            </div>
          </Link>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header-top">
            <Link to="/">
              <img
                className="logo"
                src="https://i.ibb.co/mcy9WKg/healthkart-logo-2.png"
                alt="healthkart-logo-2"
              />
            </Link>
            <div className="header-search">
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary search-btn"
                  type="button"
                  id="button-addon1"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
                <input
                  type="text"
                  className="form-control search-box"
                  placeholder="Search for products, Brand and Health Goals"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
            </div>
            {/* <Link className="header-link" href="#">
              My Accounts & Orders
            </Link>
            <Link className="header-link" to={"/register"}>
              Register
            </Link>
            <Link className="header-link" to={"/login"}>
              Login
            </Link>
            <Link className="header-link" to="/cart">
              <ion-icon className="cart-icn" name="cart-outline"></ion-icon>
            </Link> */}
            {this.conditionalHeader()}
          </div>
        </header>
        <hr />
        <div className="header-bottom">
          {/* <button className="dark-mode-btn">
            <img
              className="bulb-img"
              src="https://i.ibb.co/z5bRyms/off-light-bulb.png"
              alt="Bulb"
            />
          </button> */}
          <Link className="header-link" to="/Brands">
            Brands
          </Link>
          <Link className="header-link" to="/Category">
            Category
          </Link>
          <Link className="header-link" to="/AllProducts">
            All Products
          </Link>
          <Link className="header-link" to="/bestsellers">
            Best-Seller
          </Link>
          <Link className="header-link" to="/deals">
            Deals
          </Link>
          <Link className="header-link" to="#">
            Gift-Card
          </Link>
          <Link className="header-link" to="#">
            Blog,Videos & More
          </Link>
          <Link className="header-link" to="#">
            My Accounts & Orders
          </Link>
          <div className="header-btns">
            <button className="header-btn btn-consult">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>HK Consult
            </button>
            <button className="header-btn btn-find">
              <ion-icon name="location-outline"></ion-icon>Find a Store
            </button>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    fetch(getUserUrl, {
      method: "GET",
      headers: {
        "access-token": sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "form api");
        this.setState({
          userData: data,
        });
      });
    // let cartItems = sessionStorage.getItem("cart");
    // this.setState({ cartItem: cartItems });
  }
}

export default withRouter(Header);

import React from "react";
import "../details/details.css";
import axios from "axios";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import Advert from "../../Elements/advert";
import "../../Elements/advert.css";
import { Link } from "react-router-dom";
import Header from "../../HeaderFooter/header";

const detailsURL =
  "https://healthkart-render-api-production.up.railway.app/brands/";
// const detailsURL = "http://localhost:9800/brands/";
// const detailsURL = "https://healthkart-render-api.onrender.com/brands/";
// const brandsURL = "https://healthkart-render-api.onrender.com/brands";
// const categoryURL = "https://healthkart-render-api.onrender.com/categories";

class DetailsPage extends React.Component {
  constructor(props) {
    // console.log(props, "these are the props");
    super(props);

    this.state = {
      details: "",

      // brandName: "",
      // categoryName: "",
      // brandID: sessionStorage.getItem("brandId"), // for backbutton
    };
  }
  // cart = [];
  // const [cart, setCart] = useState([]);

  // handleAddToCart = (item) => {
  //   this.cart.push(item);
  //   console.log(this.cart);
  // };

  render() {
    const product = this.state.details;
    const interestPrice = Math.round(Number(product.sell_price) / 3);
    const HkCoins = Math.round(Number(product.sell_price / 20));
    return (
      <>
        <Header />
        <main id="section-main">
          <section id="product">
            <div id="product-illustrations">
              <img
                id="details-product-img"
                src={product.image}
                alt={product.product_name}
              />
            </div>

            <div id="product-shop">
              <Link id="tag" to={`/listing/${product.category_id}`}>
                {product.category}
              </Link>
              <h3 id="product-name">{product.product_name}</h3>
              <div id="manufacturer">
                <span>By</span>
                <Link id="manufacturer-link" to={`/brand/${product.brand_id}`}>
                  {product.brand}
                </Link>
              </div>
              <div id="rating">
                <div id="stars">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                </div>
                <span id="rating-value">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <span id="offer">{product.offer}% Off</span>
              <div id="product-price">
                <span id="offer-price">Rs.{product.sell_price}</span>
                <span id="old-price">Rs.{product.old_price}</span>
                <div id="get-hkcoins">
                  <span id="get-hkcoins-text"> + </span>
                  <img
                    src="	https://static1.hkrtcdn.com/hknext/static/media/common/hk-cash-yellow.svg
            "
                    alt="hk coin"
                  />
                  <span id="get-hkcoins-text"> Get HK Cash: ₹{HkCoins}</span>
                </div>
              </div>
              <div id="pricing-details">
                <button id="premium-btn">
                  <img
                    src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/premium-logo-new.svg"
                    alt="premium member"
                  />
                  <span id="premium-text">
                    Premium Member Price : Rs.{product.premium_price}
                  </span>
                </button>
                <div id="emi">
                  <div id="emi-align">
                    <span>
                      3 interest free payments of ₹({interestPrice}) with
                    </span>
                    <img
                      id="simpl-icon"
                      src="	https://static1.hkrtcdn.com/hknext/static/media/logos/simpl.png"
                      alt="simpl"
                    />
                  </div>
                  <p id="move-down">
                    + Get 10% cashback up to a maximum of ₹500.
                  </p>
                </div>
              </div>
              <div id="check-out">
                <div id="buy">
                  <button
                    id="add-to-cart"
                    onClick={() => this.props.handleAddToCart(product)}
                  >
                    <ion-icon id="buy-icon" name="cart-outline"></ion-icon>
                    <span>ADD TO CART</span>
                  </button>
                  {/* <button id="quick-buy">
                    <ion-icon id="buy-icon" name="flash-outline"></ion-icon>
                    <span>QUICK BUY</span>
                  </button> */}
                  <Link to={"/cart"} id="quick-buy">
                    <ion-icon id="buy-icon" name="cart-outline"></ion-icon>
                    <span>Go To Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Extras />
        <Advert />
      </>
    );
  }

  async componentDidMount() {
    let productID = this.props.location.search.split("?")[1];
    let response = await axios.get(`${detailsURL}${productID}`);
    this.setState({ details: response.data[0] });
    // console.log(
    //   response.data[0],
    //   "this is product data from",
    //   `${detailsURL}${productID}`
    // );
    // get brand
  }
}

export default DetailsPage;

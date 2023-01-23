import React from "react";
import { Link } from "react-router-dom";
// const allrProductURL = "https://healthkart-render-api.onrender.com/allproducts";
// const allrProductURL = "http://localhost:9800/allproducts";
const allrProductURL =
  "https://healthkart-render-api-production.up.railway.app/allproducts";

class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      allProducts: "",
    };
  }
  getAllProducts = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="item product-padding col-xl-3" key={item.id}>
            <div className="product">
              <div className="product-illustrations">
                <Link to={`/details?${item.id}`} className="to-product">
                  <img
                    id="product-img"
                    src={item.image}
                    alt={item.product_name}
                  />
                </Link>
                {/* <a href="#">
                  <ion-icon
                    className="heart-icon"
                    name="heart-outline"
                  ></ion-icon>
                </a> */}
                <div className="offer-tag">
                  <span className="offer">{item.offer}%</span>
                </div>
              </div>
              <div className="product-details">
                <Link to={`/details?${item.id}`} className="to-product">
                  <span className="product-name">{item.product_name}</span>
                </Link>
                <div className="rating">
                  <ion-icon
                    className="rating-star"
                    name="star-outline"
                  ></ion-icon>
                  <span className="rating-value">
                    {item.rating} ({item.reviews})
                  </span>
                </div>
                <div className="price-and-cart">
                  <div className="price">
                    <span className="new-price">Rs.{item.sell_price}</span>
                    <span className="old-price">Rs.{item.old_price}</span>
                  </div>
                  {/* <a href="#" class="add-to-cart">
                      <ion-icon
                        class="cart-icon"
                        name="heart-outline"
                      ></ion-icon>
                      <span class="add-text">Add</span>
                    </a> */}
                </div>
              </div>
              <div className="premium-price">
                <div>
                  <span className="premium-price-text">Premium Price: </span>
                  <span className="premium-price-value">
                    Rs.{item.premium_price}
                  </span>
                </div>
                <ion-icon
                  className="lock"
                  name="lock-closed-outline"
                ></ion-icon>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return <>{this.getAllProducts(this.state.allProducts)}</>;
  }

  componentDidMount() {
    fetch(allrProductURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ allProducts: data });
      });
  }
}

export default AllProducts;

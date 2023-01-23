import React, { useState } from "react";
import { Link } from "react-router-dom";

const BrandsListingDisplay = (props) => {
  // console.log(addToCart.length, "this is the add to cart props");

  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (item) => {
  //   cart.push(item);
  //   console.log(cart);
  // };

  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="col" key={item.id}>
              <div className="product">
                <div className="product-illustrations">
                  <Link to={`/details?${item.id}`} className="to-product">
                    <img
                      id="product-img"
                      src={item.image}
                      alt={item.product_name}
                    />
                  </Link>
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
                    {/* <button
                      className="add-to-cart"
                      // onClick={() => handleAddToCart(item)}
                    >
                      <ion-icon
                        class="cart-icon"
                        name="heart-outline"
                      ></ion-icon>
                      <span className="add-text">Add</span>
                    </button> */}
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
      } else {
        return (
          <div>
            <h2>No Data As per filter</h2>
          </div>
        );
      }
    } else {
      return (
        <div>
          <img src="/images/loader.gif" alt="loader" />
          <h2>Loading....</h2>
        </div>
      );
    }
  };

  return (
    <>
      <div id="content">{renderData(props)}</div>
    </>
  );
};

export default BrandsListingDisplay;

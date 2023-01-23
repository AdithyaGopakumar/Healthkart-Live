import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const trendingWheyURL =
  "https://healthkart-render-api-production.up.railway.app/allproducts/trendingwhey";
// const trendingWheyURL = "http://localhost:9800/allproducts/trendingwhey";
// const trendingWheyURL =
//   "https://healthkart-render-api.onrender.com/allproducts/trendingwhey";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#02b4b2" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#02b4b2" }}
      onClick={onClick}
    />
  );
}

class TrendingWheyCarousel extends Component {
  constructor() {
    super();

    this.state = {
      products: "",
    };
  }

  getProducts = (data) => {
    if (data) {
      // console.log(data, "this is data in map");
      return data.map((item) => {
        return (
          <div className="product" key={item.id}>
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
                {/* <button className="add-to-cart">
                  <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
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
              <ion-icon className="lock" name="lock-closed-outline"></ion-icon>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <section className="products">
          <div className="section-top">
            <div className="section-heading">
              <ion-icon name="flash-outline"></ion-icon>
              <span>Trending in Whey Protein</span>
            </div>
            <div className="view-all">
              <a className="view-all-link" href="#">
                View all
              </a>
            </div>
          </div>
          <hr />
          <Slider {...settings}>{this.getProducts(this.state.products)}</Slider>
        </section>
      </div>
    );
  }

  componentDidMount() {
    fetch(trendingWheyURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ products: data });
      });
    // console.log(this.state.products, "this is the state");
  }
}

export default TrendingWheyCarousel;

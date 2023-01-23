import React from "react";
import { Link } from "react-router-dom";
const brandURL =
  "https://healthkart-render-api-production.up.railway.app/brands";
// const brandURL = "http://localhost:9800/brands";
// const brandURL = "https://healthkart-render-api.onrender.com/brands";

class Brand extends React.Component {
  constructor() {
    super();
    this.state = {
      brands: "",
    };
  }
  getBrand = (data) => {
    if (data) {
      // console.log(data);
      return data.map((item) => {
        return (
          <div className="brand-category-item" key={item.brand_id}>
            <img
              src={item.image}
              alt=""
              className="brand-category-img category-item-img"
            />

            <p className="brand-category-text">{item.text}</p>
            <div className="to-brand-category">
              <Link
                to={`/brand/${item.brand_id}`}
                className="brand-category-link"
              >
                Go to {item.brand}
              </Link>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return <div key={123}>{this.getBrand(this.state.brands)}</div>;
  }

  componentDidMount() {
    fetch(brandURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ brands: data });
      });
    // console.log(this.state.brands, "this is the state");
  }
}

export default Brand;

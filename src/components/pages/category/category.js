import React from "react";
import { Link } from "react-router-dom";
const categoryURL =
  "https://healthkart-render-api-production.up.railway.app/categories";
// const categoryURL = "http://localhost:9800/categories";
// const categoryURL = "https://healthkart-render-api.onrender.com/categories";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: "",
    };
  }
  getCategories = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="brand-category-item" key={item.category_id}>
            <img
              src={item.image}
              alt=""
              className="brand-category-img category-item-image"
            />

            <p className="brand-category-text">{item.text}</p>
            <div className="to-brand-category">
              <Link
                to={`/listing/${item.category_id}`}
                className="brand-category-link"
              >
                Go to {item.category}
              </Link>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return <>{this.getCategories(this.state.categories)}</>;
  }

  componentDidMount() {
    fetch(categoryURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ categories: data });
      });
  }
}

export default Categories;

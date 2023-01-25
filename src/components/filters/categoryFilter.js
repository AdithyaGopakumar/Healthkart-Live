import React from "react";
import axios from "axios";
import "./filters.css";
const filterURL =
  "https://healthkart-render-api-production.up.railway.app/filter";
// const filterURL = "http://localhost:9800/filterinbrand";
// const filterURL = "https://healthkart-render-api.onrender.com/filter";

class CategoryFilter extends React.Component {
  categoryFilter = (e) => {
    let brandId = this.props.brandID;
    let categoryId = e.target.value;
    let filteredURL = "";
    if (categoryId === "") {
      filteredURL = `${filterURL}/${brandId}`;
    } else {
      filteredURL = `${filterURL}/${brandId}?categoryId=${categoryId}`;
    }
    axios.get(filteredURL).then((res) => {
      this.props.filterFunc(res.data);
    });
  };

  render() {
    return (
      <>
        <h3 className="filter-headings heading-text">Categories</h3>
        <div onChange={this.categoryFilter}>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="category" value="" />
              All
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="category" value="1" />
              Protein
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="category" value="2" />
              Gainer
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="category" value="3" />
              Supplement
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="category" value="4" />
              Creatine
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="category" value="5" />
              Pre-workout
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryFilter;

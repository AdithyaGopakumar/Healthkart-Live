import React from "react";
import axios from "axios";
import "./filters.css";
// const filterURL =
//   "https://healthkart-render-api-production.up.railway.app/filter";
const filterURL = "http://localhost:9800/filterincategory";
// const filterURL = "https://healthkart-render-api.onrender.com/filter";

class BrandFilter extends React.Component {
  categoryFilter = (e) => {
    let categoryId = this.props.categoryId;
    let brandId = e.target.value;
    let filteredURL = "";
    if (brandId === "") {
      filteredURL = `${filterURL}/${categoryId}`;
    } else {
      filteredURL = `${filterURL}/${categoryId}?brandId=${brandId}`;
    }
    axios.get(filteredURL).then((res) => {
      this.props.filterFunc(res.data);
    });
  };

  render() {
    return (
      <>
        <h3 className="filter-headings heading-text">Brands</h3>
        <div onChange={this.categoryFilter}>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="" />
              All
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="1" />
              MuscleBlaze
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="2" />
              Optimum Nutrition
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="6" />
              MuscleTech
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="7" />
              Labrada
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="8" />
              GNC
            </label>
          </div>
          <div className="filter-option">
            <label className="radio">
              <input type="radio" name="brand" value="9" />
              Other
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default BrandFilter;

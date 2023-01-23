import React from "react";
import axios from "axios";

const filterURL = "http://localhost:9800/filterincategory";
// const filterURL = "https://healthkart-render-api.onrender.com/filter";
// const filterURL = "https://healthkart-render-api.onrender.com/filter/1?categoryId=1&hcost=3000&lcost=2000";

class CategoryCostFilter extends React.Component {
  brandFilter = (e) => {
    let categoryId = this.props.categoryId;
    let cost = e.target.value.split("-");
    let lcost = cost[0];
    let hcost = cost[1];
    let costURL = "";
    if (e.target.value === "") {
      costURL = `${filterURL}/${categoryId}`;
    } else {
      costURL = `${filterURL}/${categoryId}?hcost=${hcost}&lcost=${lcost}`;
    }
    axios.get(costURL).then((res) => {
      this.props.filterFuncCost(res.data);
    });
  };

  render() {
    return (
      <>
        <h3 className="filter-headings">Cost</h3>

        <div onChange={this.brandFilter}>
          <label className="radio">
            <input type="radio" name="category" value="" />
            All
          </label>
          <label className="radio">
            <input type="radio" name="category" value="1-1000" />
            Less than ₹ 1000
          </label>
          <label className="radio">
            <input type="radio" name="category" value="1001-2000" />₹ 1001-₹
            2000
          </label>
          <label className="radio">
            <input type="radio" name="category" value="2001-3000" />₹ 2001-₹
            3000
          </label>
          <label className="radio">
            <input type="radio" name="category" value="3001-100000" />
            Greater than ₹ 3000
          </label>
        </div>
      </>
    );
  }
}

export default CategoryCostFilter;

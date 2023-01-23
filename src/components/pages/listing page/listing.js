import React from "react";
import axios from "axios";
import "./listing.css";
import ListingDisplay from "./listingDisplay";
import Header from "../../HeaderFooter/header";
import BrandFilter from "../../filters/brandFilter";
import CategoryCostFilter from "../../filters/catCostFilter";
const listingURL =
  "https://healthkart-render-api-production.up.railway.app/allproducts?categoryId=";
// const listingURL = "http://localhost:9800/allproducts?categoryId=";
// const listingURL =
//   "https://healthkart-render-api.onrender.com/allproducts?categoryId=";

class ListingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: "",
      category: "",
    };
  }

  setDataPerFilter = (data) => {
    this.setState({ productList: data });
  };

  render() {
    // console.log(this.state.productList, "this is from state");
    return (
      <>
        <Header />
        <div
          key={this.props.match.params.categoryId}
          className="brand-container"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <BrandFilter
                  categoryId={this.props.match.params.categoryId}
                  filterFunc={(data) => {
                    this.setDataPerFilter(data);
                  }}
                />
                <CategoryCostFilter
                  categoryId={this.props.match.params.categoryId}
                  filterFuncCost={(data) => {
                    this.setDataPerFilter(data);
                  }}
                />
              </div>

              <div className="col col-xl-9">
                <h1 className="brand-">
                  Popular picks from {this.state.category}
                </h1>
                <div className="container products">
                  <div className="row">
                    <>
                      <ListingDisplay listData={this.state.productList} />
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    let categoryId = this.props.match.params.categoryId;
    sessionStorage.setItem("categoryID", categoryId);
    axios.get(`${listingURL}${categoryId}`).then((res) => {
      this.setState({ productList: res.data });
      // console.log(res.data, `${listingURL}${categoryId}`);
      this.setState({ category: res.data[0].category });
    });
  }
}

export default ListingPage;

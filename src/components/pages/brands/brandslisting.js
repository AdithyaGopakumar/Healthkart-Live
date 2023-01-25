import React from "react";
import axios from "axios";
import "../listing page/listing.css";
import BrandsListingDisplay from "./brandsListingDisplay";
import CategoryFilter from "../../filters/categoryFilter";
import CostFilter from "../../filters/costFilter";
import { Link } from "react-router-dom";
import FilterNav from "../../filters/filterNav";
import Header from "../../HeaderFooter/header";

const BrandslistingURL =
  "https://healthkart-render-api-production.up.railway.app/allproducts?brandId=";
// const BrandslistingURL = "http://localhost:9800/allproducts?brandId=";
// const BrandslistingURL =
//   "https://healthkart-render-api.onrender.com/allproducts?brandId=";
// const brandURL = "https://healthkart-render-api.onrender.com/brands";

class BrandListingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brandProductList: "",
      brand: "",
      linkRender: "0",
    };
  }

  // handleButtonClick() {
  //   this.setState({ linkRender: this.props.match.params.brandId });
  // }

  setDataPerFilter = (data) => {
    this.setState({ brandProductList: data });
  };

  render() {
    // console.log(this.props.match.params.brandId);
    // this.handleButtonClick();
    return (
      <>
        <Header />
        <div
          key={this.props.match.params.brandId}
          className="brand-container brands-and-category"
        >
          <div className="container">
            <div className="row">
              <div className="col col-xl-3">
                <CategoryFilter
                  brandID={this.props.match.params.brandId}
                  filterFunc={(data) => {
                    this.setDataPerFilter(data);
                  }}
                />
                <CostFilter
                  brandID={this.props.match.params.brandId}
                  filterFuncCost={(data) => {
                    this.setDataPerFilter(data);
                  }}
                />
                <FilterNav brandID={this.props.match.params.brandId} />
              </div>
              <div className="col col-xl-9">
                <h1 className="brand heading-text">
                  Popular picks from {this.state.brand}
                </h1>
                <div className="container brands-and-category">
                  <div className="row">
                    <>
                      {/* <h1 className="brand">
                        Popular picks from {this.state.brand}
                      </h1> */}
                      <BrandsListingDisplay
                        listData={this.state.brandProductList}
                      />
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
    let brandId = this.props.match.params.brandId;

    sessionStorage.setItem("brandId", brandId);
    axios.get(`${BrandslistingURL}${brandId}`).then((res) => {
      this.setState({ brandProductList: res.data });
      this.setState({ brand: res.data[0].brand });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.brandId !== prevProps.match.params.brandId) {
      let brandId = this.props.match.params.brandId;
      sessionStorage.setItem("brandId", brandId);
      axios.get(`${BrandslistingURL}${brandId}`).then((res) => {
        this.setState({ brandProductList: res.data });

        this.setState({ brand: res.data[0].brand });
      });
    }
  }
}

export default BrandListingPage;

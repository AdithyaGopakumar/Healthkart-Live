import React from "react";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import AllProducts from "./Allproducts";
import Header from "../../HeaderFooter/header";

const AllProductsDisplay = () => {
  return (
    <>
      <Header />
      <div className="container brands-and-category">
        <h1 className="container heading-text">All our Products: </h1>
        <div className="container">
          <div className="row">
            <AllProducts />
          </div>
        </div>
      </div>
      <Extras />
    </>
  );
};

export default AllProductsDisplay;

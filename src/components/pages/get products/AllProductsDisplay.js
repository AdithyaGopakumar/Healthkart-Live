import React from "react";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import AllProducts from "./Allproducts";
import Header from "../../HeaderFooter/header";

const AllProductsDisplay = () => {
  return (
    <>
      <Header />
      <h1 className="container">Showing All Products</h1>
      <div className="container">
        <div className="row">
          <AllProducts />
        </div>
      </div>
      <Extras />
    </>
  );
};

export default AllProductsDisplay;

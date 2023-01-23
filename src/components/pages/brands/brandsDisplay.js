import React from "react";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import Brand from "./brands";
import DetailsPage from "../details/details";
import "../../Elements/brandsAndCategory.css";
import Header from "../../HeaderFooter/header";

const BrandDisplay = () => {
  return (
    <>
      <Header />
      <div className="container brands-and-category">
        <h1 className="container heading-text">Select From Our Top Brands:</h1>
        <div className="container">
          <Brand />
        </div>
      </div>
      <Extras />
    </>
  );
};

export default BrandDisplay;

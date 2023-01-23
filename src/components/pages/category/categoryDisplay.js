import React from "react";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import Categories from "./category";
import "../../Elements/brandsAndCategory.css";
import Header from "../../HeaderFooter/header";
const CategoryDisplay = () => {
  return (
    <>
      <Header />
      <h1 className="container heading-text">Showing All Categories</h1>
      <div className="container">
        <Categories />
      </div>
      <Extras />
    </>
  );
};

export default CategoryDisplay;

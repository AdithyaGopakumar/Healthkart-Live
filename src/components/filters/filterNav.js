import React from "react";
import { Link } from "react-router-dom";
import "./filters.css";
const FilterNav = (props) => {
  return (
    <>
      <div key={props.brandID} className="brands-categories">
        <h3 className="filter-headings heading-text">Browse our Top Brands</h3>
        <div className="links-conatiner">
          <div className="link-container">
            <Link to="/brand/1" className="brands-link">
              MuscleBlaze
            </Link>
          </div>
          <div className="link-container">
            <Link to="/brand/2" className="brands-link">
              Optimum Nutrition
            </Link>
          </div>
          <div className="link-container">
            <Link to="/brand/6" className="brands-link">
              MuscleTech
            </Link>
          </div>
          <div className="link-container">
            <Link to="/brand/7" className="brands-link">
              Labrada
            </Link>
          </div>
          <div className="link-container">
            <Link to="/brand/8" className="brands-link">
              GNC
            </Link>
          </div>
          <div className="link-container">
            <Link to="/brand/9" className="brands-link">
              Other
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNav;

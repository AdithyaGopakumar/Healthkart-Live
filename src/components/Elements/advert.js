import React from "react";

const Advert = () => {
  return (
    <>
      <section className="advert">
        <div className="ad-flex">
          <div className="ad-common fst-ad">
            <img
              className="ad-img"
              src="https://img6.hkrtcdn.com/7590/bnr_758975_o.png"
              alt="TrueBasics ad"
            />
            <div className="ad-text">
              <span className="ad-heading ad-spacing">TrueBasics </span>
              <span className="ad-heading">Upto 20% Off</span>
              <p className="ad-sm-text">Clinically Researched Essentials</p>
              <button className="ad-btn">Shop now</button>
            </div>
          </div>
          <div className="ad-common scnd-ad">
            <img
              className="ad-img"
              src="	https://img1.hkrtcdn.com/20061/bnr_2006050_o.png"
              alt="MuscleBlaze ad"
            />
            <div className="ad-text">
              <span className="ad-heading ad-spacing">MuscleBlaze </span>
              <span className="ad-heading">Upto 30% Off</span>
              <p className="ad-sm-text">More Power To You</p>
              <button className="ad-btn">Shop now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advert;

import React from "react";

const AddCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="#">
              <img
                src="	https://img7.hkrtcdn.com/21393/bnr_2139276_o.jpg"
                className="d-block w-100"
                alt="Biozyme performance whey"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="	https://img5.hkrtcdn.com/21392/bnr_2139194_o.jpg"
                className="d-block w-100"
                alt="Fitness revolution sale"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="	https://img9.hkrtcdn.com/21393/bnr_2139228_o.jpg"
                className="d-block w-100"
                alt="Proteins"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="	https://img7.hkrtcdn.com/21395/bnr_2139446_o.jpg"
                className="d-block w-100"
                alt="Hk Vitals"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="	https://img1.hkrtcdn.com/21395/bnr_2139450_o.jpg"
                className="d-block w-100"
                alt="TrueBasics"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="		https://img5.hkrtcdn.com/21102/bnr_2110134_o.jpg"
                className="d-block w-100"
                alt="Pro Check"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="		https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"
                className="d-block w-100"
                alt="Subscribe"
              />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <ion-icon
            className="carousel-icon"
            name="chevron-back-outline"
          ></ion-icon>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <ion-icon
            className="carousel-icon"
            name="chevron-forward-outline"
          ></ion-icon>
        </button>
      </div>
    </>
  );
};

export default AddCarousel;

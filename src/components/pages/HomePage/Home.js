import React from "react";
import AddCarousel from "../../Elements/addCarousel";
import "../../Elements/addCarousel.css";
import QuickSearch from "../../Elements/quicksearch";
import "../../Elements/quicksearch.css";
import Advert from "../../Elements/advert";
import "../../Elements/advert.css";
import Extras from "../../Elements/extras";
import "../../Elements/extras.css";
import "../../Elements/product.css";
import FlashSaleCarousel from "../../Carousel/flashSale";
import TrendingNowCarousel from "../../Carousel/trendingNow";
import TrendingWheyCarousel from "../../Carousel/trendingWhey";
import GainersCarousel from "../../Carousel/gainers";

import Header from "../../HeaderFooter/header";
const flashSaleURL =
  "https://healthkart-render-api.onrender.com/allproducts/flashsale";
const trendingNowURL =
  "https://healthkart-render-api.onrender.com/allproducts/trending";
const trendingWheyURL =
  "https://healthkart-render-api.onrender.com/allproducts/trendingwhey";
const gainersURL =
  "https://healthkart-render-api.onrender.com/allproducts/gainers";

const HomePage = () => {
  return (
    <>
      <Header />
      <AddCarousel />
      <FlashSaleCarousel />
      <TrendingNowCarousel />
      <QuickSearch />
      <TrendingWheyCarousel />
      <GainersCarousel />
      <Advert />
      <Extras />
    </>
  );
};

// class HomePage extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     flashSaleProducts: "",
//     trendingProducts: "",
//     wheyProducts: "",
//     gainers: "",
//   };
// }

// render() {
//   return (
//     <>
//       <Header />
//       <AddCarousel />
//       {/* <OwlCarousel /> */}
// <FlashSaleCarousel />
// <TrendingNowCarousel />
// <QuickSearch />
// <TrendingWheyCarousel />
// <GainersCarousel />
//       <Advert />
//       {/* <FilterNav /> */}
//       <Extras />
//     </>
//   );
// }
// componentDidMount() {
//   fetch(flashSaleURL, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       this.setState({ flashSaleProducts: data });
//     });
//   fetch(trendingNowURL, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       this.setState({ trendingProducts: data });
//     });
//   fetch(trendingWheyURL, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       this.setState({ wheyProducts: data });
//     });
//   fetch(gainersURL, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       this.setState({ gainers: data });
//     });
// }
// }

export default HomePage;

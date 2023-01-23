import React from "react";
import FlashSaleCarousel from "../Carousel/flashSale";
import TrendingNowCarousel from "../Carousel/trendingNow";
import TrendingWheyCarousel from "../Carousel/trendingWhey";
import GainersCarousel from "../Carousel/gainers";
import Header from "../HeaderFooter/header";
import Extras from "../Elements/extras";
import Advert from "../Elements/advert";
import QuickSearch from "../Elements/quicksearch";

const BestSellerPage = () => {
  return (
    <>
      <Header />
      <TrendingNowCarousel />
      <GainersCarousel />
      <QuickSearch />
      <FlashSaleCarousel />
      <TrendingWheyCarousel />
      <Advert />
      <Extras />
    </>
  );
};

export default BestSellerPage;

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";

const MainCarousel = () => {
  const items = HomeCarouselData.map((item) => <img className="cursor-pointer" role="presentation" src={item.image_url} alt="" />);

  return (
    <div>
      <AliceCarousel mouseTracking items={items} controlsStrategy="alternate"
      disableButtonsControls autoPlay autoPlayInterval={2000} infinite />
    </div>
  );
};

export default MainCarousel;

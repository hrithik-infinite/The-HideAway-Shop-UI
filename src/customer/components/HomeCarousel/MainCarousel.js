import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import  homeCarouselData  from "./HomeCarouselData";

const MainCarousel = () => {
  const items = homeCarouselData.map((item) => <img className="cursor-pointer" role="presentation" src={item.image} alt="" />);

  return (
    <div>
      <AliceCarousel mouseTracking items={items} controlsStrategy="alternate"
      disableButtonsControls autoPlay autoPlayInterval={2000} infinite />
    </div>
  );
};

export default MainCarousel;

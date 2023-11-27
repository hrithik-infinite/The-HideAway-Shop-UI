import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const HomeSectionProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
    1520: { items: 6 },
  };
  const slidePrev = function () {
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = function () {
    setActiveIndex(activeIndex + 1);
  };
  const syncActiveIndex = function ({ item }) {
    setActiveIndex(item);
  };
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => <HomeSectionCard />);
  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5 ">
        <AliceCarousel mouseTracking items={items} controlsStrategy="alternate" disableButtonsControls infinite responsive={responsive} disableDotsControls onSlideChange={syncActiveIndex} activeIndex={activeIndex} />
        <Button className="z-50" onClick={slideNext} variant="contained" sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }}>
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
        <Button className="z-50" onClick={slidePrev} variant="contained" sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }}>
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>
      </div>
    </div>
  );
};
export default HomeSectionProductCarousel;

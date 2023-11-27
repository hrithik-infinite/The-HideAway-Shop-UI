import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionProductCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
    1520: { items: 6 },
  };
  const carouselRef = React.createRef();
  const slidePrev = function () {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slideNext = function () {
    setActiveIndex(activeIndex + 1);
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = function ({ item }) {
    setActiveIndex(item);
  };

  const items = data.map((item, index) => (
    <div key={index}>
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            className="z-50"
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}>
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            className="z-50"
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}>
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionProductCarousel;

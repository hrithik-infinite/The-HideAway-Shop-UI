import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionProductCarousel from "../../components/HomeSectionProductCarousel/HomeSectionProductCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionProductCarousel />
      </div>
    </div>
  );
};
export default HomePage;

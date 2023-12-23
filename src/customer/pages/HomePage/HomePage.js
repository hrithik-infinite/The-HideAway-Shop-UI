import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionProductCarousel from "../../components/HomeSectionProductCarousel/HomeSectionProductCarousel";
import mens_kurta from "../../../Data/mens_kurta";
const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-4/5 h-4/5">
          <MainCarousel />
        </div>
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionProductCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionProductCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionProductCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionProductCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionProductCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};
export default HomePage;

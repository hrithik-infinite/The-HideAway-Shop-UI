import React from "react";

const HomeSectionCard = () => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white
        rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51j3fPQTQkL.jpg" alt="" className="object-cover object-top w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Decathlon</h3>
        <p className="text-sm mt-2 text-gray-500">High Quality SkateBoard</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

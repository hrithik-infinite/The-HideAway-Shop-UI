import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] border m-3 transition-all cursor-pointer ">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt=""></img>
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">SG LEMAN</p>
          <p>Men Embroidered Jacquard Straight Kurta</p>
          <p className="font-semibold opacity-50">Yellow</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹ 1999</p>
          <p className="opacity-50 line-through">₹ 5999</p>
          <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

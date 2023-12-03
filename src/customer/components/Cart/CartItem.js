import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70" alt="" className="w-full h-full object-cover object-top"></img>
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Title</p>
          <p className="opacity-70">Size: M</p>
          <p className="opacity-70 mt-2">Seller: Amazon</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹ 100</p>
            <p className="font-semibold text-lg">₹ 99</p>
            <p className="text-green-600 font-semibold">200 % off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton color="primary">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">111</span>
          <IconButton color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="text">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

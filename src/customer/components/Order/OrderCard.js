import { Box, Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70" alt=""></img>
            <div className="ml-5">
              <p className="mb-2">Men Solid Pure Cotton Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹ 1000</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <p>
              <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 p-0 mr-2 text-sm"></AdjustIcon>
              <span>Delivered on March 02</span>
            </p>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 02</span>
            </p>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;

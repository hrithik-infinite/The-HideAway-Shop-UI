import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, Grid } from "@mui/material";
import OrderTraker from "./OrderTracker";
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";
const order = {
  orderId: "123456789",
  order: {
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Cityville",
      state: "State",
      zip: "12345",
    },
    orderStatus: "PLACED", // You can change this to other statuses for testing
    orderItems: [
      {
        product: {
          id: "1",
          title: "Product 1",
          imageUrl: "https://placekitten.com/200/300", // replace with actual image URL
          brand: "Brand 1",
        },
        size: "M",
        price: 50.0,
      },
      {
        product: {
          id: "2",
          title: "Product 2",
          imageUrl: "https://placekitten.com/200/300", // replace with actual image URL
          brand: "Brand 2",
        },
        size: "L",
        price: 75.0,
      },
      // Add more items as needed
    ],
  },
};

const OrderDetails = () => {
  return (
    <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard />
        </Grid>
      </Grid>

      <Box className="p-5 shadow-lg border rounded-md">
        <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Grid item xs={9}>
            <OrderTraker />
          </Grid>
          <Grid item>
            {order.order?.orderStatus === "DELIVERED" && (
              <Button sx={{ color: "" }} color="error" variant="text">
                RETURN
              </Button>
            )}

            {order.order?.orderStatus !== "DELIVERED" && (
              <Button sx={{ color: deepPurple[500] }} variant="text">
                cancel order
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
      <Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid container item className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img className="w-[5rem] h-[5rem] object-cover object-top" src={item?.product.imageUrl} alt="" />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.price} </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box sx={{ color: deepPurple[500] }} onClick={() => {}} className="flex items-center cursor-pointer">
                  <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;

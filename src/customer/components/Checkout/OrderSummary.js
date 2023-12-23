import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../Redux/Order/Action";
import { createPayment } from "../../../Redux/Payment/Action";
const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((state) => state);
  console.log("Order =>  ", order);
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCreatePayment = () => {
    const data = { orderId: order.order?.id, jwt };
    console.log("datttaaaaa" , data);
    dispatch(createPayment(data));
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">{order && order?.order && order?.order?.orderItems.map((item) => <CartItem item={item} />)}</div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price</span>
                  <span>{`₹ ${order?.order?.totalPrice}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">{`₹ ${order?.order?.discount}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">{`₹ ${order?.order?.totalDiscountedPrice}`}</span>
                </div>
              </div>

              <Button onClick={handleCreatePayment} variant="contained" type="submit" sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}>
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../Redux/Order/Action";
const AddAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    dispatch(createOrder({ address, jwt, navigate }));
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 2 }} size="large" variant="contained" color="primary" onClick={() => {}}>
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="given-name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required id="address" name="address" label="Address" fullWidth autoComplete="shipping address" multiline rows={4} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth autoComplete="tel" />
                </Grid>
                <Grid item xs={12}>
                  <Button sx={{ padding: ".9rem 1.5rem" }} size="large" type="submit" variant="contained" color="primary">
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAddress;

import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../Redux/Auth/Action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  // useEffect(() => {
  //   if (auth.user || auth.error) setOpenSnackBar(true)
  // }, [auth.user]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("user data", userData);
    dispatch(login(userData));
  };
  return (
    <React.Fragment className=" shadow-lg ">
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField required id="email" name="email" label="Email" fullWidth autoComplete="given-name" />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="password" name="password" label="Password" fullWidth autoComplete="given-name" type="password" />
          </Grid>

          <Grid item xs={12}>
            <Button className="bg-[#9155FD] w-full" type="submit" variant="contained" size="large" sx={{ padding: ".8rem 0" }}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">don't have account ?</p>
          <Button onClick={() => navigate("/register")} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>
      {/* <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: "100%" }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar> */}
    </React.Fragment>
  );
};

export default Login;

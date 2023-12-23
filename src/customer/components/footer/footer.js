import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid className="bg-black text-white text-center mt-10" container sx={{ bgcolor: "black", color: "white", py: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Company</Typography>
          <div>
            <Button variant="h6">About</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Solutions</Typography>
          <div>
            <Button variant="h6">Marketing</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Documentation</Typography>
          <div>
            <Button variant="h6">Guides</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Legal</Typography>

          <div>
            <Button variant="h6">Terms</Button>
          </div>
        </Grid>
        <Grid className="pt-5" item xs={12}>
          <Typography variant="body2" component="p" align="enter">
            &copy; 2023 The HideAway Shop. All Rights Reserved
          </Typography>
          <Typography variant="body2" component="p" align="enter">
            Made with ❤️ by{" "}
            <Link href="https://www.linkedin.com/in/hrithikagarwal/" color="inherit" underline="always">
              Hrithik Agarwal
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

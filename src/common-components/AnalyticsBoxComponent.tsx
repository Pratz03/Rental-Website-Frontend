import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

function AnalyticsBoxComponent() {
  return (
    <div className="anlytics-box-container">
      <div className="analytics-main-heading">
        <Typography variant="h3" color="secondary">34</Typography>
        <Typography className="heading">Total Bookings</Typography>
      </div>
      <Divider sx={{ mb: "15px", mt: "20px" }} />
      {/* <div className="anlytics-other-stats"> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={2} sm={12} md={6} key={""}>
          <Typography variant="h4" color="secondary">4</Typography>
          <Typography className="inner-heading">Today's</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sm={12}
          md={6}
          key={""}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ width: "fit-content" }}>
            <Typography variant="h4"color="secondary">12</Typography>
            <Typography className="inner-heading">This month's</Typography>
          </div>
        </Grid>
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default AnalyticsBoxComponent;

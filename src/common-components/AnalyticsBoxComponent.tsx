import { Divider, Grid, IconButton, Typography } from "@mui/material";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import React from "react";

function AnalyticsBoxComponent() {
  return (
    <div className="anlytics-box-container">
      <div className="analytics-main-heading">
        <IconButton aria-label="icon" size="large">
          <LocalFireDepartmentRoundedIcon />
        </IconButton>
        <div style={{ textAlign: "center" }}>
          <Typography className="heading">Total Bookings</Typography>
          <Typography variant="h3" color="secondary">
            34
          </Typography>
        </div>
      </div>
      <Divider sx={{ mb: "15px", mt: "20px" }} />
      {/* <div className="anlytics-other-stats"> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={2} sm={12} md={6} key={""}>
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <Typography className="inner-heading">Today's</Typography>
            <Typography variant="h4" color="secondary">
              4
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          sm={12}
          md={6}
          key={""}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <Typography className="inner-heading">This month's</Typography>
            <Typography variant="h4" color="secondary">
              12
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default AnalyticsBoxComponent;

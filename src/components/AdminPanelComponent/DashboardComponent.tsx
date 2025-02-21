import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import AnalyticsBoxComponent from "../../common-components/AnalyticsBoxComponent";
import "../../styles/dashboard.css";
import BookingsComponent from "./BookingsComponent";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

function DashboardComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          //   position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "40px 0 20px",
          zIndex: 10,
        }}
      >
        Overview
      </Typography>
      <div className="analytics-main-container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={6} md={4} key={""}>
            <AnalyticsBoxComponent />
          </Grid>
          <Grid item xs={4} sm={6} md={4} key={""}>
            <AnalyticsBoxComponent />
          </Grid>
          <Grid item xs={4} sm={6} md={4} key={""}>
            <AnalyticsBoxComponent />
          </Grid>
        </Grid>
      </div>
      <div className="recent-bookings-container">
        <Typography
          variant="h6"
          component="div"
          sx={{
            //   position: "fixed",
            width: "100%",
            background: "#ffffff",
            padding: "30px 0 20px",
            zIndex: 10,
          }}
        >
          Recent Bookings
        </Typography>
        <div>
          <BookingsComponent rowsTable={5} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "0px 10px"
            }}
          >
            <Button
              variant="text"
              color="secondary"
              endIcon={<EastRoundedIcon />}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;

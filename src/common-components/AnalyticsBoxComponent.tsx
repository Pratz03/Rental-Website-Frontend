import { Divider, Grid, IconButton, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import React, { useEffect } from "react";

interface Props {
  mainHeadingValue?: any;
  subheading1Value?: any;
  subheading2Value?: any;
  heading?: any;
  subheading1?: any;
  subheading2?: any;
  icon: any;
}

function AnalyticsBoxComponent(props: Props) {  
  useEffect(()=> {
    console.log("----------------------------------", props.mainHeadingValue)
  }, [])
  return (
    <div className="anlytics-box-container">
      <div className="analytics-main-heading">
        <IconButton aria-label="icon" size="large">
          {props.icon}
        </IconButton>
        <div style={{ textAlign: "center" }}>
          <Typography className="heading">{props.heading}</Typography>
          <Typography variant="h3" color="secondary">
            {props.mainHeadingValue}
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
            <Typography className="inner-heading">{props.subheading1 ? props.subheading1 : ""}</Typography>
            <Typography variant="h4" color="secondary">
              {props.subheading1Value}
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
            <Typography className="inner-heading">{props.subheading2 ? props.subheading2 : ""}</Typography>
            <Typography variant="h4" color="secondary">
              {props.subheading2Value}
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default AnalyticsBoxComponent;

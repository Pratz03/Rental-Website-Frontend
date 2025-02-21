import { Grid } from "@mui/material";
import React from "react";
import MenuBarComponent from "../HeaderFooterComponent/MenuBarComponent";

function UserProfileComponent() {
  return (
    <div className="user-profile-main-container">
      <MenuBarComponent />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={3} md={4} key={""} className="">
            
        </Grid>
        <Grid item xs={2} sm={5} md={8} key={""} className=""></Grid>
      </Grid>
    </div>
  );
}

export default UserProfileComponent;

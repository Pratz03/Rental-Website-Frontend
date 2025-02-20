import { Grid } from "@mui/material";
import React from "react";
import MenuBarComponent from "../HeaderFooterComponent/MenuBarComponent";
import FilterComponent from "./FilterComponent";
import "../../styles/allProducts.css"

function AllProductsComponent() {
  return (
    <div className="product-main-container">
      <div>
        <MenuBarComponent />
      </div>
      <div className="">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={4} key={""}>
            <FilterComponent />
          </Grid>
          <Grid item xs={2} sm={5} md={8} key={""}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AllProductsComponent;

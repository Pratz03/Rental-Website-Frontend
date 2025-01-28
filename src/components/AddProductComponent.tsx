import { Grid2, TextField } from "@mui/material"; // Corrected Grid import
import React from "react";
import { productMeta } from "../helpers/metaData";

function AddProductComponent() {
  return (
    <div>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {productMeta.map((field, index) => (
          <Grid2 size={6}>
            <TextField id="" label={field.label} variant="outlined" />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default AddProductComponent;

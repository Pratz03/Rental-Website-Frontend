import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductMeta } from "../../helpers/config";
import { InputType } from "../../helpers/constants";
import prodcutAPI from "../../api/productAPI";
import _ from "lodash";

function AddProduct() {
  const [productFields, setProductFields] = useState<ProductMeta[]>();

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));

    try {
      prodcutAPI.getProductFields().then((data) => {
        console.log("?????", data)
        setProductFields(_.get(data, "result[0].product_fields"));
      });
      // console.log(">>>>", response.then((data) => console.log("?????", data)));

      
    } catch (error) {}

    // axios
    //   .get("http://localhost:5000/settings", {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
    //     },
    //   })
    //   .then((res) => {
    //     console.log(">>>>>", res.data);

    //     setCompanyInfo(res.data);

    //   })
    //   .catch((err) => console.log(err.message));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "20px 0",
          zIndex: 10,
        }}
      >
        Add Product
      </Typography>
      <div style={{ flexGrow: 1, overflowY: "auto", paddingTop: "90px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 8, md: 12 }}>
          {productFields &&
            productFields.map((field, index) => (
              <Grid item xs={2} sm={4} md={6}>
                {field.inputType === InputType.INPUT && (
                  <TextField
                    label={field.label}
                    sx={{ m: 1, width: "25ch" }}
                    id={`tesxtfield-${field.key}`}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            {field.metric}
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
                {/* {field.inputType === InputType.SELECT && (
                  <FormControl>
                    <InputLabel id="">{field.label}</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={option}
                      label={field.label}
                      onChange={handleChange}
                      sx={{ width: "25ch", textAlign: "left" }}
                    >
                      {field.options?.map((option, index) => (
                        <MenuItem value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )} */}
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default AddProduct;

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductMeta } from "../../helpers/config";
import { InputType } from "../../helpers/constants";
import prodcutAPI from "../../api/productAPI";
import _ from "lodash";
import theme from "../../theme";

function AddProduct() {
  const [productFields, setProductFields] = useState<ProductMeta[]>();
  const [productData, setProductData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (event: any) => {
    if (!event.target.name) return;
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
    validateFields(name, value);
  };

  const validateFields = (name: string, value: string) => {
    let error = "";
    if (!value.trim) {
      error = "This field can't be empty.";
    }
    setErrors((prevErr) => ({ ...prevErr, [name]: error }));
  };

  const handleSubmit = () => {
    let isValid = true;
    Object.entries(productData).forEach(([key, value]) => {
      validateFields(key, value);
      if (errors[key as keyof typeof errors]) isValid = false;
    });

    if (!isValid) return;

    console.log("yayyyyyyyyyyyyyy");
  };

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));

    try {
      prodcutAPI.getProductFields().then((data) => {
        setProductFields(_.get(data, "result[0].product_fields"));
        const productdata = Object.values(
          _.get(data, "result[0].product_fields")
        );
        let initialData: any = {};
        productdata.forEach((field: any) => {
          initialData[field.key] = "";
        });
        setProductData(initialData);
        setErrors(initialData);
      });
    } catch (error) {
      console.error("Error fetching product fields:", error);
    }
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
      <div style={{ flexGrow: 1, paddingTop: "90px" }}>
        <Box sx={{ p: 4, border: "1px solid #e9e9e9", borderRadius: 2 }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 2, sm: 2, md: 4 }}
            onSubmit={handleSubmit}
          >
            {productFields &&
              productFields.map((field, index) => (
                <Grid item xs={12} sm={12} md={6}>
                  {field.inputType === InputType.INPUT && (
                    <FormControl sx={{ width: "100%" }}>
                      <TextField
                        name={field.key}
                        label={field?.label}
                        value={productData[field?.label] as string}
                        sx={{}}
                        id={`textfield-${field.key}`}
                        onChange={handleChange}
                        error={
                          !!errors[field?.label]
                            ? !!errors[field?.label]
                            : false
                        }
                        helperText={
                          errors[field?.label] ? errors[field?.label] : ""
                        }
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                sx={{
                                  "& .MuiTypography-root": {
                                    color: theme.palette.text.primary,
                                  },
                                }}
                              >
                                {field.metric}
                              </InputAdornment>
                            ),
                          },
                        }}
                        fullWidth
                      />
                    </FormControl>
                  )}
                  {field.inputType === InputType.SELECT && (
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="">{field.label}</InputLabel>
                      <Select
                        name={field.key}
                        labelId="demo-simple-select-label"
                        id={`select-${field.key}`}
                        value={productData[field?.label] as string}
                        label={field.label}
                        onChange={handleChange}
                        sx={{ textAlign: "left" }}
                      >
                        {JSON.parse(field.options as string).map(
                          (option: any, index: number) => (
                            <MenuItem value={option}>{option}</MenuItem>
                          )
                        )}
                      </Select>
                      {errors[field?.label] && (
                        <Typography color="error">
                          {errors[field?.label]}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                </Grid>
              ))}
            <Grid item xs={12} sm={12} md={12}>
              <Button type="submit" variant="contained" color="secondary">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default AddProduct;

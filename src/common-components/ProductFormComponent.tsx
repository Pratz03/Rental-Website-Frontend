import React, { useEffect, useState } from "react";
import prodcutAPI from "../api/productAPI";
import { ProductMeta } from "../helpers/config";
import _ from "lodash";
import { DataType, InputType } from "../helpers/constants";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../theme";

interface Props {
  key: string;
  initialData?: Record<string, string>;
  handleChange: (product: any) => void;
}

function ProductFormComponent() {
  const [productFields, setProductFields] = useState<ProductMeta[]>();
  const [productData, setProductData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (event: any, type: DataType) => {
    if (!event.target.name) return;
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
    validateFields(name, value, type);
  };

  const validateFields = (name: string, value: string, type: DataType) => {
    let error = "";

    if (!value.trim()) {
      return (error = "This field can't be empty.");
    }

    switch (type) {
      case DataType.NUMBER:
        if (isNaN(value as any)) {
          error = "This value should be in numbers.";
        } else error = "";
        break;

      default:
        break;
    }

    setErrors((prevErr) => ({ ...prevErr, [name]: error }));
    return error;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    let newErrors: Record<string, string> = {};
    let isValid = true;

    Object.entries(productData).forEach(([key, value]) => {
      const type = productFields?.find((field) => field.key === key)?.dataType;
      const error = validateFields(key, value, type as DataType);

      if (error) isValid = false;
      newErrors[key] = error;
    });

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      const response = await prodcutAPI.AddProduct(productData);

      console.log("====", response);

      const resetData = Object.keys(productData).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {} as Record<string, string>);

      setProductData(resetData);
    } catch (error) {
      console.error("Error updating product fields:", error);
    }
  };

  useEffect(() => {
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
        <Box
          component="form"
          sx={{ p: 4, border: "1px solid #e9e9e9", borderRadius: 2 }}
          onSubmit={handleSubmit}
        >
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 2, sm: 2, md: 4 }}
          >
            {(productFields?.length as number) > 0 &&
              productFields?.map((field, index) => (
                <Grid item xs={12} sm={12} md={6}>
                  {field.inputType === InputType.INPUT && (
                    <FormControl sx={{ width: "100%" }}>
                      <TextField
                        name={field.key}
                        label={field?.label}
                        value={productData[field?.key as string]}
                        sx={{}}
                        id={`textfield-${field.key}`}
                        onChange={(e) =>
                          handleChange(e, field?.dataType as DataType)
                        }
                        error={
                          !!errors[field?.key as string]
                            ? !!errors[field?.key as string]
                            : false
                        }
                        helperText={
                          errors[field?.key as string]
                            ? errors[field?.key as string]
                            : ""
                        }
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                sx={{
                                  "& .MuiTypography-root": {
                                    color: theme.palette.secondary.main,
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
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        name={field.key}
                        labelId="demo-simple-select-label"
                        id={`select${field.key}`}
                        value={productData[field?.key as string] || ""}
                        label={field.label}
                        onChange={(e) =>
                          handleChange(e, field?.dataType as DataType)
                        }
                        sx={{ textAlign: "left" }}
                      >
                        {JSON.parse(field.options as string).map(
                          (option: any, index: number) => (
                            <MenuItem value={option}>{option}</MenuItem>
                          )
                        )}
                      </Select>
                      {errors[field?.key as string] && (
                        <Typography color="error">
                          {errors[field?.key as string]}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                </Grid>
              ))}
            <Grid item xs={12} sm={12} md={12}>
              <Button type="submit" variant="contained" color="secondary">
                Add product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ProductFormComponent;

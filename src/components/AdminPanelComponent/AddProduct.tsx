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
import { DataType, InputType } from "../../helpers/constants";
import prodcutAPI from "../../api/productAPI";
import _ from "lodash";
import theme from "../../theme";
import { AxiosError } from "axios";
import ProductFormComponent from "../../common-components/ProductFormComponent";

function AddProduct() {
  const [productData, setProductData] = useState<Record<string, string>>({});

  const handleChange = (updatedData: Record<string, string>) => {
    setProductData(updatedData);
  };

  const handleClick = async (e: any) => {
    console.log("Submitting Product Data:", productData);
    try {
      const response = await prodcutAPI.AddProduct(productData);
      console.log("Response: ", response);
      resetForm();
    } catch (error) {
      console.error("Error updating product fields:", error);
    }
  };

  const resetForm = () => {
    const resetData = Object.keys(productData).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as Record<string, string>);

    setProductData(resetData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          background: "#ffffff",
          padding: "20px 0",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        Add Product
      </Typography>
      
      {/* Scrollable section */}
      <div style={{ flexGrow: 1, overflowY: "auto", padding: "20px 0" }}>
        <ProductFormComponent
          key="add_product"
          handleChange={(productData) => setProductData(productData)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={(e: any) => handleClick(e)}
          sx={{ m: "20px 0" }}
        >
          Add product
        </Button>
      </div>
    </div>
  );
  
}

export default AddProduct;

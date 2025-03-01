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
import "../../styles/addProduct.css";

function AddProduct() {
  const [productData, setProductData] = useState<Record<string, string>>({});
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const handleClick = async (e: any, key: string) => {
    if (key === "reset") {
      setIsDataSubmitted(!isDataSubmitted);
    } else {
      try {
        const response = await prodcutAPI.AddProduct(productData);
        setIsDataSubmitted(!isDataSubmitted);
      } catch (error) {
        console.error("Error updating product fields:", error);
      }
    }
  };

  return (
    <div className="add-product-main-container">
      <Typography
        variant="h6"
        sx={{
          background: "#ffffff",
          padding: "40px 0 20px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        Add Product
      </Typography>

      {/* Scrollable section */}
      <div style={{ flexGrow: 1, overflowY: "auto", padding: "20px 0", border: "1px solid #e9e9e9", borderRadius: "8px" }}>
        <ProductFormComponent
          key="add_product"
          handleChange={(productData) => setProductData(productData)}
          isDataSubmitted={isDataSubmitted}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e: any) => handleClick(e, "reset")}
          sx={{ m: "20px 0", width: "200px", margin: "20px 20px" }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e: any) => handleClick(e, "add_product")}
          sx={{ m: "20px 0", width: "200px", margin: "20px 20px" }}
        >
          Add product
        </Button>
      </div>
    </div>
  );
}

export default AddProduct;

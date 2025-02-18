import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import theme from "../../theme";
import AddProduct from "./AddProduct";
import ProductFormComponent from "../../common-components/ProductFormComponent";
import prodcutAPI from "../../api/productAPI";

interface Props {
  columns: string[];
  productData: any;
  isDataUpdated: (value: boolean) => void;
}

function EditProductComponent(props: Props) {
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [productData, setProductData] = useState<any>({});
  const [updatedData, setUpdatedData] = useState<any>({});

  const handleClickOpen = () => {
    console.log("++++++++", props.columns, props.productData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    setUpdatedData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("from child = ", productData);
    
    try {
        prodcutAPI.editProductData(props.productData.product_id, productData)
        props.isDataUpdated(true);
        handleClose();
    } catch (error) {
        throw error
    }
  };

  useEffect(() => {
    // console.log("++++++++", props.columns, props.productData);
    setProductData(props.productData);
  }, [props.productData]);

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen} color="secondary">
        <EditRoundedIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Product"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"></DialogContentText> */}
          {/* {props.columns &&
            props.columns.map(
              (column: string, index: number) =>
                props.productData &&
                Object.keys(props.productData).map(
                  (value) =>
                    column === value &&
                    !(column === "booking_status") &&
                    !(column === "product_id") && (
                      <TextField
                        id={`column-${column}`}
                        name={column}
                        label={column
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                        value={productData[column] || ""}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ mt: 3 }}
                        fullWidth
                      />
                    )
                )
            )} */}
          <ProductFormComponent
            key="edit_product"
            initialData={props.productData}
            handleChange={(productData) => setProductData(productData)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default EditProductComponent;

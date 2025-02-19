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

  const handleClickOpen = () => {
    console.log("++++++++", props.columns, props.productData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

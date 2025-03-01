import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import prodcutAPI from "../../api/productAPI";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import theme from "../../theme";
import EditProductComponent from "./EditProductComponent";
import "../../styles/editProduct.css"

function EditProductMain() {
  const [productData, setProductData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = (isDataUpdated: boolean) => {
    setIsUpdate(isDataUpdated);
  };

  const deleteProduct = (id: string) => {
    console.log(id)
    try {
      const response = prodcutAPI.deleteProductData(id);
      handleUpdate(true);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await prodcutAPI.getLimitedData(50, 0);
        setProductData(response);
        if (response.length > 0) setColumns(Object.keys(response[0]));
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
    setIsUpdate(false);
  }, [isUpdate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "85vh",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          background: "#ffffff",
          padding: "20px 0",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        View / Edit Products
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: "calc(80vh - 50px)",
        }}
      >
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: 600,
                }}
              >
                Edit
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 600,
                }}
              >
                Delete
              </TableCell>
              {columns.map((key) => (
                <TableCell
                  key={key}
                  style={{
                    minWidth:
                      key === "product_name" ||
                      key === "description" ||
                      key === "booking_status" ||
                      key === "image"
                        ? 200
                        : 120,
                    fontWeight: 600,
                  }}
                >
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.length > 0 ? (
              productData.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <EditProductComponent
                      columns={columns}
                      productData={product}
                      isDataUpdated={(value) => handleUpdate(value)}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => deleteProduct(product["product_id"] as string)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  {columns.map((key) => (
                    <TableCell key={`${index}-${key}`}>
                      {key === "booking_status" && product["booking_status"]
                        ? product["booking_status"].map(
                            (booking: any, idx: number) => (
                              <div key={idx}>
                                <b>Pickup: </b>{booking.pickup_date} <br />
                                <b>Drop: </b>{booking.drop_date}
                              </div>
                            )
                          )
                        : product[key] || "N/A"}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No Products Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default EditProductMain;

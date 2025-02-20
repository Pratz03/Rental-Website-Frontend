import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuBarComponent from "../HeaderFooterComponent/MenuBarComponent";
import FilterComponent from "./FilterComponent";
import "../../styles/allProducts.css";
import prodcutAPI from "../../api/productAPI";
import ProductCardComponent from "../../common-components/ProductCardComponent";

function AllProductsComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await prodcutAPI.getLimitedData(9, 0);
        console.log(":::::::", response);
        setProducts(response);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);
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
          <Grid item xs={2} sm={3} md={3} key={""} className="filters-container">
            <FilterComponent />
          </Grid>
          <Grid item xs={2} sm={5} md={9} key={""} className="products-container">
            <Grid
              container
              spacing={{ xs: 2, md: 3.5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              className="product-list-container"
            >
              {products.map((product: any, index) => (
                <Grid item xs={4} sm={4} md={4} key={""}>
                  <ProductCardComponent productData={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AllProductsComponent;

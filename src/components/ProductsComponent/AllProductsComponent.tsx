import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuBarComponent from "../HeaderFooterComponent/MenuBarComponent";
import FilterComponent from "./FilterComponent";
import "../../styles/allProducts.css";
import prodcutAPI from "../../api/productAPI";
import ProductCardComponent from "../../common-components/ProductCardComponent";
import FooterComponent from "../HeaderFooterComponent/FooterComponent";

function AllProductsComponent() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (Object.keys(filters).length > 0) {
          response = await prodcutAPI.getFilteredProducts("", filters, 50, 0);
        } else {
          response = await prodcutAPI.getLimitedData(50, 0);
        }

        // Force state update
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(); // Fetch products on mount
  }, [filters]); // Re-run when filters change

  const handleFilters = (newFilters: any) => {
    console.log("++++++", newFilters);
    setFilters(
      newFilters && Object.keys(newFilters).length > 0 ? newFilters : {}
    );
  };

  return (
    <>
      <div className="product-main-container">
        <MenuBarComponent />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={3} className="filters-container">
            <FilterComponent handleFilters={handleFilters} />
          </Grid>
          <Grid item xs={2} sm={5} md={9} className="products-container">
            <Grid
              container
              spacing={{ xs: 2, md: 3.5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              className="product-list-container"
            >
              {products.length > 0 ? (
                products.map((product: any, index) => (
                  <Grid item xs={4} sm={4} md={4} key={index}>
                    <ProductCardComponent productData={product} />
                  </Grid>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <FooterComponent />
    </>
  );
}

export default AllProductsComponent;

import React from "react";
import "../../src/styles/productCard.css"
import car from "../assets/car.jpg";
import { Divider, Grid, Typography } from "@mui/material";
import theme from "../theme";

function ProductCardComponent() {
  return (
    <div>
      <div className="card-container">
        <div className="image-container"><img src={car} /></div>
        <div className="info-container">
            <div className="text-container">
                <Typography variant="h6">Maruti S-Cross</Typography>
                <Typography variant="body2">SUV</Typography>
            </div>
            <div className="text-container">
                <Typography variant="h6">$ 2000</Typography>
                <Typography variant="body2">Per day</Typography>
            </div>
        </div>
        <Divider sx={{ borderColor: theme.palette.secondary.main, width: "70%", m: "5px auto" }} />
        <div className="info-container1">
            <div className="text-container">
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Milage</Typography>
                <Typography variant="body2">SUV</Typography>
            </div>
            <div className="text-container">
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Distance Driven</Typography>
                <Typography variant="body2">10000 km</Typography>
            </div>
            <div className="text-container">
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Age</Typography>
                <Typography variant="body2">4 years</Typography>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardComponent;

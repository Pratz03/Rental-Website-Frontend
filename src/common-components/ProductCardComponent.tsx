import React, { useEffect, useState } from "react";
import "../../src/styles/productCard.css";
import car from "../assets/car.jpg";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import { Divider, Grid, Typography } from "@mui/material";
import theme from "../theme";
import _ from "lodash";
import { useNavigate } from "react-router";
import { useTenantId } from "../hooks/tenantHook";

interface Props {
  productData: Record<string, string>;
}

function ProductCardComponent(props: Props) {
  const [product, setProduct] = useState<Record<string, string>>({});
  const [cardData, setCardData] = useState<Record<string, string>>({});

  const tenantId = useTenantId();
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(props.productData);
    setCardData({
      Brand: props.productData["brand"],
      Condition: props.productData["condition"],
      Age: props.productData["age"],
    });
  }, []);

  const hanndleClick = () => {
    navigate(`/${tenantId}/products/${props.productData["product_id"]}`);
  }

  return (
    <div>
      {!(Object.keys(props.productData).length === 0) && (
        <div className="card-container" onClick={hanndleClick} style={{ cursor: "pointer" }}>
          <div className="image-container">
            <img src={car2} />
          </div>
          <div className="info-container">
            <div className="text-container">
              <Typography variant="h6" sx={{ fontSize: "15px !important" }}>
                {product["product_name"]}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px !important" }}>
                {product["product_type"]}
              </Typography>
            </div>
            <div className="text-container">
              <Typography variant="h6" sx={{ fontSize: "15px !important" }}>
                ${product["rent"]}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px !important" }}>
                Per day
              </Typography>
            </div>
          </div>
          <Divider
            sx={{
              borderColor: theme.palette.secondary.main,
              width: "70%",
              m: "5px auto",
            }}
          />
          <div className="info-container1">
            {Object.keys(cardData).map((key) => (
              <div className="text-container">
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, fontSize: "14px !important" }}
                >
                  {key}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "12px !important" }}
                >
                  {cardData[key]}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCardComponent;

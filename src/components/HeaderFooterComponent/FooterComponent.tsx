import React from "react";
import "../../styles/footer.css";
import theme from "../../theme";
import { Divider, Typography } from "@mui/material";

function FooterComponent() {
  return (
    <div
      className="footer-main-container"
      style={{ backgroundColor: "rgb(247, 247, 247)" }}
    >
      <Typography variant="body1">
        © 2025 Rental. All rights reserved.
      </Typography>
      <div className="inner-container">
        <Typography
          variant="body1"
          sx={{ mr: 1 }}
        >
          rental@gmail.com
        </Typography>
        <Typography
          variant="body1"
        >
          443-343-33
        </Typography>
      </div>
    </div>
  );
}

export default FooterComponent;

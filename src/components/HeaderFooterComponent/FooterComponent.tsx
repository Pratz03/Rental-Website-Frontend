import React from "react";
import "../../styles/footer.css";
import theme from "../../theme";
import { Divider, Typography } from "@mui/material";

function FooterComponent() {
  return (
    <div
      className="footer-main-container"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        © 2025 Rental. All rights reserved.
      </Typography>
      <div className="inner-container">
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, mr: 1 }}
        >
          rental@gmail.com
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary }}
        >
          443-343-33
        </Typography>
      </div>
    </div>
  );
}

export default FooterComponent;

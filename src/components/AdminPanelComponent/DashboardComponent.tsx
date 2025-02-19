import { Typography } from "@mui/material";
import React from "react";

function DashboardComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "40px 0 20px",
          zIndex: 10,
        }}
      >
        Overview
      </Typography>
      <div className="analytics-main-container">
        
      </div>
    </div>
  );
}

export default DashboardComponent;

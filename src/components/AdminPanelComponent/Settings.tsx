import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../styles/settings.css";
import { SketchPicker } from "react-color";
import React, { useState } from "react";
import theme from "../../theme";

function Settings() {
    const [color, setColor] = useState(theme.palette.primary.main);
  return (
    <div style={{ marginTop: "40px" }}>
      <Typography variant="h5" component="div">
        Brand Settings
      </Typography>
      <Grid className="setting-container" container spacing={2} rowSpacing={5}>
        <Grid size={6}>
          <div className="logo-container">
            <Button variant="contained" component="label" color="secondary">
              Upload File
              <input type="file" hidden />
            </Button>
            <Box
              sx={{
                width: 150,
                height: 70,
                border: "1px solid #e9e9e9",
                borderRadius: "8",
                ml: 3,
              }}
            ></Box>
          </div>
        </Grid>
        <Grid size={8}>
          <TextField
            id="outlined-basic"
            label="Company name"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid size={4}><Box
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 2,
          background: color,
          width: 100,
          height: 40,
          border: "1px solid #ccc",
        }}
      />

      {/* Color Picker */}
      <SketchPicker
        color={color}
        onChangeComplete={(updatedColor: any) => setColor(updatedColor.hex)}
      /></Grid>
        <Grid size={8}></Grid>
      </Grid>
    </div>
  );
}

export default Settings;

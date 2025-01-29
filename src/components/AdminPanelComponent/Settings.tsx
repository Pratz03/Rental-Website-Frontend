import { Box, Button, Popover, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../styles/settings.css";
import ColorPickerComponent from "../../common-components/ColorPickerComponent";
import { useState } from "react";
import theme from "../../theme";

function Settings() {
  const [primaryColor, setPrimaryColor] = useState<string>(
    theme.palette.primary.main
  );
  const [secondaryColor, setSecondaryColor] = useState<string>(
    theme.palette.secondary.main
  );
  const [textLight, setTextLight] = useState<string>(
    theme.palette.text.primary
  );
  const [textDark, setTextDark] = useState<string>(
    theme.palette.text.secondary
  );

  return (
    <div style={{ marginTop: "40px" }}>
      <Typography variant="h5" component="div">
        Brand Settings
      </Typography>
      <Grid className="setting-container" container spacing={2} rowSpacing={6}>
        <Grid size={6}>
          <div className="logo-container">
            <Button variant="outlined" component="label" color="secondary" sx={{ fontWeight: "600" }}>
              Upload File
              <input type="file" hidden />
            </Button>
            <Box
              sx={{
                width: 150,
                height: 70,
                border: "1px solid #e9e9e9",
                borderRadius: 2,
                ml: 3,
              }}
            ></Box>
          </div>
        </Grid>
        <Grid size={12}>
          <TextField
            id=""
            label="Company Name"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        {/* <Grid size={4}></Grid> */}
        <Grid size={3}>
          <Grid container>
            <Grid size={6} sx={{ height: "100%", m: "auto" }}>
              <Typography variant="body1">Primary Color</Typography>
            </Grid>
            <Grid size={6}>
              <ColorPickerComponent
                selectedColor={primaryColor || "#ffffff"}
                handleChange={setPrimaryColor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container>
            <Grid size={6} sx={{ height: "100%", m: "auto" }}>
              <Typography variant="body1">Secondary Color</Typography>
            </Grid>
            <Grid size={6}>
              <ColorPickerComponent
                selectedColor={secondaryColor || "#ffffff"}
                handleChange={setPrimaryColor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container>
            <Grid size={6} sx={{ height: "100%", m: "auto" }}>
              <Typography variant="body1">Text Dark</Typography>
            </Grid>
            <Grid size={6}>
              <ColorPickerComponent
                selectedColor={textDark || "#ffffff"}
                handleChange={setPrimaryColor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}>
          <Grid container>
            <Grid size={6} sx={{ height: "100%", m: "auto" }}>
              <Typography variant="body1">Text Light</Typography>
            </Grid>
            <Grid size={6}>
              <ColorPickerComponent
                selectedColor={textLight || "#ffffff"}
                handleChange={setPrimaryColor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <TextField
            id=""
            label="Company Address"
            multiline
            rows={2}
            defaultValue=""
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <TextField
            id=""
            label="Email Address"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <TextField
            id=""
            label="Phone Number"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid size={12}>
          <TextField
            id=""
            label="Company Description"
            multiline
            rows={4}
            defaultValue=""
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid size={4}>
          <Button variant="contained" component="label" color="secondary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;

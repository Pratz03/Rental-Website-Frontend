import { Box, Button, Popover, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../styles/settings.css";
import ColorPickerComponent from "../../common-components/ColorPickerComponent";
import { useEffect, useState } from "react";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  fetchSettings,
  saveSettings,
  setSettings,
  SettingsState,
} from "../../store/slices/companySettingsSlice";

function SettingsComponent() {
  const [file, setFile] = useState<string>();

  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e?.target?.files[0]));
      return;
    }
    const { name, value } = e.target;

    dispatch(
      setSettings({
        ...settings,
        [name]: value,
      })
    );
  };

  const handleColorChange = (field: keyof SettingsState, color: string) => {
    dispatch(setSettings({ ...settings, [field]: color }));
  };

  const handleSubmit = () => {
    console.log(">>>>>>>>>>", settings);

    dispatch(saveSettings(settings));
  };

  useEffect(() => {
    dispatch(fetchSettings());
    console.log("Settings from Redux:", settings);
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      <Typography variant="h5" component="div">
        Brand Settings
      </Typography>
      <Grid className="setting-container" container spacing={2} rowSpacing={6}>
        <Grid size={6}>
          <div className="logo-container">
            <Button
              variant="outlined"
              component="label"
              color="secondary"
              sx={{ fontWeight: "600" }}
            >
              Upload File
              <input type="file" onChange={handleChange} hidden />
            </Button>
            {file ? (
              <Box
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  border: "1px solid #e9e9e9",
                  borderRadius: 2,
                  ml: 3,
                }}
              >
                <img src={file} style={{ width: "auto", height: "100px" }} />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #e9e9e9",
                  borderRadius: 2,
                  ml: 3,
                }}
              >
              </Box>
            )}
          </div>
        </Grid>
        <Grid size={12}>
          <TextField
            id=""
            name="company_name"
            label="Company Name"
            variant="outlined"
            color="secondary"
            value={settings.company_name || ""}
            // defaultValue={settings.company_name}
            onChange={handleChange}
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
                selectedColor={settings.primary_color || "#ffffff"}
                handleChange={(color) =>
                  handleColorChange("primary_color", color)
                }
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
                selectedColor={settings.secondary_color || "#ffffff"}
                handleChange={(color) =>
                  handleColorChange("secondary_color", color)
                }
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
                selectedColor={settings.text_dark || "#ffffff"}
                handleChange={(color) => handleColorChange("text_dark", color)}
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
                selectedColor={settings.text_light || "#ffffff"}
                handleChange={(color) => handleColorChange("text_light", color)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <TextField
            id=""
            name="company_address"
            label="Company Address"
            multiline
            rows={2}
            color="secondary"
            value={settings.company_address}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <TextField
            id=""
            name="email_address"
            label="Email Address"
            variant="outlined"
            color="secondary"
            value={settings.email_address}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <TextField
            id=""
            name="phone_number"
            label="Phone Number"
            variant="outlined"
            color="secondary"
            value={settings.phone_number}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={12}>
          <TextField
            id=""
            name="company_description"
            label="Company Description"
            multiline
            rows={4}
            color="secondary"
            value={settings.company_description}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={4}>
          <Button
            variant="contained"
            component="label"
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SettingsComponent;

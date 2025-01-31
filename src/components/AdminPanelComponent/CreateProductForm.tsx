import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { iconMap } from "../../helpers/iconMap";
import theme from "../../theme";

function CreateProductForm() {
  const [type, setType] = React.useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    ...theme.typography.body1,
    padding: theme.spacing(2.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  }));

  const BootstrapButton = styled(Button)({
    textTransform: "none",
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.secondary.main,
    margin: "20px 0 0",
  });

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingTop: "20px" }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "20px 0",
        }}
      >
        Create Product Form
      </Typography>
      <div style={{ flexGrow: 1, overflowY: "auto", paddingTop: "90px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={4}>
              <Item>
                Add Fields
                <BootstrapButton
                  startIcon={iconMap["textfield"]}
                  variant="contained"
                  disableRipple
                >
                  Input
                </BootstrapButton>
                <BootstrapButton
                  startIcon={iconMap["select"]}
                  variant="contained"
                  disableRipple
                >
                  Select
                </BootstrapButton>
              </Item>
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              <div
                style={{
                  border: `1px solid ${theme.palette.secondary.main}`,
                  borderRadius: 8,
                  height: "fit-content",
                  padding: "20px",
                }}
              >
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={4} sm={4} md={7}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                      }}
                    >
                      <TextField
                        id=""
                        label="Field Name"
                        variant="outlined"
                        sx={{ mr: 1 }}
                        fullWidth
                      />
                      <TextField
                        id=""
                        label="Metric (Optional)"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={4} md={5}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"10"}
                        label="Type"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>String</MenuItem>
                        <MenuItem value={20}>Number</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default CreateProductForm;

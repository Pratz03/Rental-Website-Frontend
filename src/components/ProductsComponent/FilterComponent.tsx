import {
  Box,
  Button,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
  Slider,
} from "@mui/material";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import React from "react";
import theme from "../../theme";

function FilterComponent() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <div className="filters-main-container">
      <div className="filter-button-container">
        <Button
          component="label"
          variant="text"
          tabIndex={-1}
          startIcon={<FilterAltRoundedIcon />}
          sx={{ textTransform: "none", fontWeight: 600 }}
          color="secondary"
        >
          Filters
        </Button>
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          sx={{ textTransform: "none" }}
          color="secondary"
        >
          Reset
        </Button>
      </div>
      <Box sx={{ border: "1px solid #dedede", mt: 3, p: 2, borderRadius: 2 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
          }}
        >
          Brand
        </Typography>
        <FormGroup sx={{}}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: theme.palette.secondary.main,
                  "&.Mui-checked": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            }
            label="Label"
          />
          <FormControlLabel
            required
            control={
              <Checkbox
                sx={{
                  color: theme.palette.secondary.main,
                  "&.Mui-checked": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            }
            label="Required"
          />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </Box>
      <Box sx={{ border: "1px solid #dedede", mt: 3, p: 2, borderRadius: 2 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
          }}
        >
          Brand
        </Typography>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ mt: 2, color: theme.palette.secondary.main }}
      />
      </Box>
      <Box sx={{ border: "1px solid #dedede", mt: 3, p: 2, borderRadius: 2 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
          }}
        >
          Brand
        </Typography>
        {/* <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        /> */}
      </Box>
    </div>
  );
}

export default FilterComponent;

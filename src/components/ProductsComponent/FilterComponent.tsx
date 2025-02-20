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
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import prodcutAPI from "../../api/productAPI";

function FilterComponent() {
  const [filters, setFilters] = useState([]);
  const [rangeValues, setRangeValues] = useState<Record<string, number[]>>({});

  // Handle slider change
  const handleChange = (columnName: string) => (_: Event, newValue: number | number[]) => {
    setRangeValues((prevValues) => ({
      ...prevValues,
      [columnName]: newValue as number[],
    }));
  };

  function valuetext(value: number) {
    return `${value}`;
  }

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await prodcutAPI.getFilters();
        if (response.length === 0) return;

        // Set the filters state
        setFilters(response);

        // Initialize rangeValues using reduce to avoid multiple re-renders
        const initialRanges = response.reduce((acc: Record<string, number[]>, filter: any) => {
          if (filter["data_type"] === "integer") {
            acc[filter["column_name"]] = [filter["min_value"], filter["max_value"]];
          }
          return acc;
        }, {});

        setRangeValues(initialRanges);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, []);

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

      {filters.length > 0 &&
        filters.map((filter, index) => (
          <Box key={index} sx={{ border: "1px solid #dedede", mt: 3, p: 2, borderRadius: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {(filter["column_name"] as string)
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </Typography>

            {filter["data_type"] === "text" ? (
              (filter["unique_values"] as string[]).map((value, i) => (
                <FormGroup key={i}>
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
                    label={value}
                  />
                </FormGroup>
              ))
            ) : rangeValues[filter["column_name"]] ? (
              <Slider
                key={filter["column_name"]}
                value={rangeValues[filter["column_name"]]}
                min={filter["min_value"]}
                step={1}
                max={filter["max_value"]}
                onChange={handleChange(filter["column_name"])}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                sx={{ mt: 2, color: theme.palette.secondary.main }}
              />
            ) : null}
          </Box>
        ))}
    </div>
  );
}

export default FilterComponent;

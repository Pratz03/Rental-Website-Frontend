import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { iconMap } from "../../helpers/iconMap";
import theme from "../../theme";
import { ProductMeta } from "../../helpers/config";
import { InputType } from "../../helpers/constants";
import { v4 as uuid } from "uuid";

function CreateProductForm() {
  const [inputType, setInputType] = useState("");
  const [productFields, setProductFields] = useState<ProductMeta[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(2.5),
    border: `1px solid ${theme.palette.secondary.main}`,
    textAlign: "center",
    color: theme.palette.text.primary,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  }));

  const BootstrapButton = styled(Button)({
    textTransform: "none",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    margin: "20px 0 0",
  });

  const handleChange = (id: string, key: keyof ProductMeta, value: string) => {
    setProductFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? {
              ...field,
              [key]: value,
              ...(key === "key" && {
                label: value.replace(/\s+/g, "_").toLowerCase(),
              }),
            }
          : field
      )
    );
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" })); // Clear errors on change
  };

  const addFields = (type: InputType) => {
    setInputType(type);
    setProductFields([
      ...productFields,
      {
        id: uuid(),
        key: "",
        label: "",
        metric: "",
        inputType: type,
        dataType: "",
        // options: [],
      },
    ]);
  };

  const validateFields = () => {
    let isValid = true;
    let newErrors: { [key: string]: string } = {};

    productFields.forEach((field) => {
      if (!(field.key as string).trim()) {
        newErrors[field.id as string] = "Field name is required.";
        isValid = false;
      }
      if (field.inputType === InputType.INPUT && !field.dataType) {
        newErrors[field.id as string] = "Data type is required for input fields.";
        isValid = false;
      }
      if (field.inputType === InputType.SELECT && !field.options) {
        newErrors[field.id as string] = "Options are required for select fields.";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Form Submitted", productFields);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", paddingTop: "20px" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ position: "fixed", width: "100%", background: "#ffffff", padding: "20px 0" }}
      >
        Create Product Form
      </Typography>
      <div style={{ flexGrow: 1, overflowY: "auto", paddingTop: "90px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={4}>
              <Item>
                <Typography>Add Fields</Typography>
                <BootstrapButton startIcon={iconMap["textfield"]} variant="contained" onClick={() => addFields(InputType.INPUT)} disableRipple>
                  Input
                </BootstrapButton>
                <BootstrapButton startIcon={iconMap["select"]} variant="contained" onClick={() => addFields(InputType.SELECT)} disableRipple>
                  Select
                </BootstrapButton>
              </Item>
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              {productFields.length > 0 && (
                <div style={{ border: `1px solid ${theme.palette.secondary.main}`, borderRadius: 8, height: "fit-content", padding: "20px" }}>
                  {productFields.map((field) => (
                    <Grid key={field.id} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginBottom: "10px" }}>
                      <Grid item xs={4} sm={4} md={7}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                          <TextField
                            label="Field Name"
                            variant="outlined"
                            sx={{ mr: 1 }}
                            fullWidth
                            value={field.key}
                            onChange={(e) => handleChange(field.id as string, "key", e.target.value)}
                            error={!!errors[field.id as string]}
                            helperText={errors[field.id as string]}
                          />
                          <TextField
                            label="Metric (Optional)"
                            variant="outlined"
                            size="small"
                            value={field.metric}
                            onChange={(e) => handleChange(field.id as string, "metric", e.target.value)}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} md={5}>
                        {field.inputType === InputType.INPUT ? (
                          <FormControl fullWidth error={!!errors[field.id as string]}>
                            <InputLabel>Type</InputLabel>
                            <Select
                              value={field.dataType}
                              label="Type"
                              onChange={(e) => handleChange(field.id as string, "dataType", e.target.value)}
                            >
                              <MenuItem value={"string"}>String</MenuItem>
                              <MenuItem value={"number"}>Number</MenuItem>
                            </Select>
                          </FormControl>
                        ) : (
                          <TextField
                            label="Options"
                            variant="outlined"
                            sx={{ mr: 1 }}
                            fullWidth
                            value={field.options}
                            onChange={(e) => handleChange(field.id as string, "options", e.target.value)}
                            error={!!errors[field.id as string]}
                            helperText={errors[field.id as string]}
                          />
                        )}
                      </Grid>
                    </Grid>
                  ))}
                  <Button variant="contained" component="label" color="secondary" size="large" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default CreateProductForm;

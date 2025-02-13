import {
  Box,
  Button,
  FormControl,
  IconButton,
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
import { BooleanType, DataType, InputType } from "../../helpers/constants";
import { v4 as uuid } from "uuid";
import { productMetadata } from "../../helpers/metaData";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import "../../styles/createForm.css"
import prodcutAPI from "../../api/productAPI";

function CreateProductForm() {
  const [inputType, setInputType] = useState("");
  const [productFields, setProductFields] =
    useState<ProductMeta[]>(productMetadata);
  const [errors, setErrors] = useState<{
    [key: string]: { key?: string; dataType?: string; options?: string };
  }>({});

  const AUTH_HEADER = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGJOYW1lIjoiY2xpZW50XzliMWRlYjRkXzNiN2RfNGJhZF85YmRkXzJiMGQ3YjNkY2I2ZCIsImlhdCI6MTczODc0MDE1MiwiZXhwIjoxNzM4NzUwOTUyfQ.ZcyMmkHxcaFbjvi-_B4aLRrSw_MtPwIstQKXhN78Sq0",
  };

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
              ...(key === "label" && {
                key: value.replace(/\s+/g, "_").toLowerCase(),
              }),
            }
          : field
      )
    );
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: { ...prevErrors[id], [key]: "" },
    })); // Clear specific field errors on change

    console.log("??????", errors);
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
        dataType: type === InputType.SELECT ? DataType.STRING : undefined,
        options: "",
      },
    ]);
  };

  const validateFields = () => {
    let isValid = true;
    let newErrors: {
      [key: string]: { key?: string; dataType?: string; options?: string };
    } = {};

    productFields.forEach((field) => {
      let fieldErrors: { key?: string; dataType?: string; options?: string } =
        {};

      // Validate 'key'
      if (!(field.key as string).trim()) {
        fieldErrors.key = "Field name is required.";
        isValid = false;
      }

      // Validate 'dataType' for input fields
      if (field.inputType === InputType.INPUT && !field.dataType) {
        fieldErrors.dataType = "Data type is required.";
        isValid = false;
      }

      // Validate 'options' for select fields
      if (field.inputType === InputType.SELECT) {
        if (!field.options) {
          fieldErrors.options = "Options are required.";
          isValid = false;
        } else {
          try {
            const parsedOptions = JSON.parse(field.options as string);
            if (!Array.isArray(parsedOptions)) {
              fieldErrors.options = `Options must be a valid array format (e.g., ["opt1", "opt2"]).`;
              isValid = false;
            }
          } catch {
            fieldErrors.options = `Options must be a valid array format (e.g., ["opt1", "opt2"]).`;
            isValid = false;
          }
        }
      }

      if (Object.keys(fieldErrors).length > 0) {
        newErrors[field.id as string] = fieldErrors;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    console.log("Submitting Fields:", productFields); // Debugging step
    if (validateFields()) {
      setProductFields((prevFields) =>
        prevFields.map((field) => ({ ...field, disabled: true }))
      );
      console.log("Form Submitted", productFields);
      const updateFields = prodcutAPI.updateProductFields(productFields);
      console.log("Form Submitted", updateFields);
    }
  };

  const deleteField = (id: string) => {
    setProductFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "20px 0",
          zIndex: 10,
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
                <Typography>Add Fields</Typography>
                <BootstrapButton
                  startIcon={iconMap["textfield"]}
                  variant="contained"
                  onClick={() => addFields(InputType.INPUT)}
                  disableRipple
                >
                  Input
                </BootstrapButton>
                <BootstrapButton
                  startIcon={iconMap["select"]}
                  variant="contained"
                  onClick={() => addFields(InputType.SELECT)}
                  disableRipple
                >
                  Select
                </BootstrapButton>
              </Item>
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              {productFields.length > 0 && (
                <div
                  style={{
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRadius: 8,
                    height: "fit-content",
                    padding: "20px",
                  }}
                >
                  <Typography variant="body1" color={theme.palette.error.main} className="note">
                    Note: Ensure all fields are correctly filled before submission, as they cannot be modified afterward.
                  </Typography>
                  {productFields.map((field) => (
                    <Grid
                      key={field.id}
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{ marginBottom: "30px" }}
                    >
                      <Grid item xs={3} sm={3} md={7}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            label="Field Name"
                            variant="outlined"
                            placeholder="e.g., Milage, RAM etc"
                            sx={{ mr: 1 }}
                            fullWidth
                            value={field.label}
                            onChange={(e) =>
                              handleChange(
                                field.id as string,
                                "label",
                                e.target.value
                              )
                            }
                            error={!!errors[field.id as string]?.key}
                            helperText={errors[field.id as string]?.key}
                            disabled={
                              !(field.key === "product_type" || field.key === "brand")
                                ? field.disabled
                                : true
                            }
                          />
                          <TextField
                            label="Metric (Optional)"
                            variant="outlined"
                            placeholder="e.g., km/l, years, inch etc"
                            size="small"
                            value={field.metric}
                            onChange={(e) =>
                              handleChange(
                                field.id as string,
                                "metric",
                                e.target.value
                              )
                            }
                            disabled={
                              !(field.key === "product_type" || field.key === "brand")
                                ? field.disabled
                                : true
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={3} sm={3} md={4} sx={{ p: 0 }}>
                        {field.inputType === InputType.INPUT ? (
                          <FormControl
                            fullWidth
                            error={!!errors[field.id as string]?.dataType}
                          >
                            <InputLabel className={field.disabled ? "disabled-label" : ""}>Type</InputLabel>
                            <Select
                              value={field.dataType ? field.dataType : ""}
                              label="Type"
                              onChange={(e) =>
                                handleChange(
                                  field.id as string,
                                  "dataType",
                                  e.target.value
                                )
                              }
                              disabled={field.disabled}
                            >
                              <MenuItem value={DataType.STRING}>
                                String
                              </MenuItem>
                              <MenuItem value={DataType.NUMBER}>
                                Number
                              </MenuItem>
                            </Select>
                            {errors[field.id as string]?.dataType && (
                              <Typography color="error">
                                {errors[field.id as string]?.dataType}
                              </Typography>
                            )}
                          </FormControl>
                        ) : (
                          <TextField
                            label="Options"
                            variant="outlined"
                            placeholder="['opt1', 'opt2']"
                            fullWidth
                            value={field.options}
                            onChange={(e) =>
                              handleChange(
                                field.id as string,
                                "options",
                                e.target.value
                              )
                            }
                            error={!!errors[field.id as string]?.options}
                            helperText={errors[field.id as string]?.options}
                            disabled={field.disabled}
                          />
                        )}
                      </Grid>
                      <Grid item xs={1} sm={1} md={1} sx={{ m: "auto" }}>
                        {!field.disabled && !(field.key === "product_type" || field.key === "brand") && (
                          <IconButton
                            onClick={() => deleteField(field.id as string)}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                  <Button
                    variant="contained"
                    component="label"
                    color="secondary"
                    size="large"
                    onClick={handleSubmit}
                  >
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

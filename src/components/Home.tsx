import {
  Button,
  FormControl,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { InputType } from "../helpers/constants";
import { useEffect, useState } from "react";
import _ from "lodash";
import { ProductMeta } from "../helpers/config";

function Home() {
  const [option, setOption] = useState("");
  const [companyInfo, setCompanyInfo] = useState([]);
  const [productFields, setProductFields] = useState<ProductMeta[]>();
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  const handleLogin = () => {
    axios
      .get("http://localhost:5000/test", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleChange = (event: any) => {
    setOption(event.target.value as string);
  };

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    
    axios
      .get("http://localhost:5000/settings", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(">>>>>", res.data);
        
        setCompanyInfo(res.data);
        setProductFields(_.get(res.data, "result[0].product_fields"));
      })
      .catch((err) => console.log(err.message));
  }, []);

  const updateSettings = () => {
    axios
      .post("http://localhost:5000/settings", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setCompanyInfo(res.data);
        setProductFields(_.get(res.data, "result[0].product_fields"));
        setSettingsLoaded(true);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Button variant="contained" onClick={(e) => updateSettings()}>
        Test Api
      </Button>
      <div>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {productFields &&
            productFields.map((field, index) => (
              <Grid2 size={6}>
                {field.inputType === InputType.INPUT && (
                  <TextField
                    label={field.label}
                    sx={{ m: 1, width: "25ch" }}
                    id={`tesxtfield-${field.key}`}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            {field.metric}
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
                {field.inputType === InputType.SELECT && (
                  <FormControl>
                    <InputLabel id="">{field.label}</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={option}
                      label={field.label}
                      onChange={handleChange}
                      sx={{ width: "25ch", textAlign: "left" }}
                    >
                      {field.options?.map((option, index) => (
                        <MenuItem value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Grid2>
            ))}
        </Grid2>
      </div>
    </div>
  );
}

export default Home;

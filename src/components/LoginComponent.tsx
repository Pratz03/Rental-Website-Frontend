import { Button, Grid2, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import _ from "lodash";
import { productMeta } from "../helpers/product";
import { ProductMeta } from "../helpers/config";

const LoginComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/auth/login", {
        client_username: userName,
        client_password: password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
      })
      .catch((err) => console.log(err.message));
    navigate("/home");
  };

  const inputData = () => {
    _.map(productMeta, (object: ProductMeta) => {
      console.log(object.key);
    });
  };

  inputData();

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(e.target.value);
        }}
        style={{ margin: "10px" }}
      />
      <TextField
        id="outlined-basic1"
        label="Outlined"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
        style={{ margin: "10px" }}
      />
      <br />
      <Button variant="contained" onClick={(e) => handleLogin()}>
        Sign in
      </Button>
      <div>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {productMeta.map((field, index) => (
            <Grid2 size={6}>
              <TextField
                label={field.label}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">{field.metric}</InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </div>
  );
};

export default LoginComponent;

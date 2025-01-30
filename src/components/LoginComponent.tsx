import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

const LoginComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const dispatch = useDispatch();
  // const companySettings = useSelector(
  //   (state: RootState) => state.companySettings
  // );

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
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(e.target.value);
        }}
        style={{ margin: "10px" }}
      />
      <TextField
        id="outlined-basic1"
        label="Password"
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

      {/* <Typography>{companySettings.company_name}</Typography> */}
    </div>
  );
};

export default LoginComponent;

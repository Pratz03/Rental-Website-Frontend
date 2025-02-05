import React from "react";
import SignUpComponent from "./SignUpComponent";
import "../../styles/signUpLogIn.css";
import { Box } from "@mui/material";
import theme from "../../theme";
import SignIn from "./SignIn";

function SignUpLogInComponent() {
  return (
    <div className="signup-login-main">
      <div className="signup-main">
        {/* <SignUpComponent /> */}
        <SignIn/>
      </div>
    </div>
  );
}

export default SignUpLogInComponent;

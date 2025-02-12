import React, { useState } from "react";
import SignUpComponent from "./SignUpComponent";
import "../../styles/signUpLogIn.css";
import { Box } from "@mui/material";
import theme from "../../theme";
import SignIn from "./SignIn";

function SignUpLogInComponent() {
  const [component, setComponent] = useState("signIn");

  return (
    <div className="signup-login-main">
      <div className="signup-main">
        {component === "signIn" ? (
          <SignIn handleClick={setComponent} />
        ) : (
          <SignUpComponent handleClick={setComponent} />
        )}
      </div>
    </div>
  );
}

export default SignUpLogInComponent;

import React from "react";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import AdminPanelComponent from "./components/AdminPanelComponent/AdminPanelComponent";
import SignUpLogInComponent from "./components/SignUpLogInComponent/SignUpLogInComponent";

function App() {

  const CLIENT_ID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
  const CLIENT_URL = `/${CLIENT_ID}`

  return (
    <div className="App" style={{ display: "block" }}>
      <Routes>
        <Route path={CLIENT_URL} element={<SignUpLogInComponent />} />
        <Route path="home" element={<Home />} />
        <Route path="admin" element={<AdminPanelComponent />} />
      </Routes>
    </div>
  );
}

export default App;

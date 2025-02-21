import React from "react";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import AdminPanelComponent from "./components/AdminPanelComponent/AdminPanelComponent";
import SignUpLogInComponent from "./components/SignUpLogInComponent/SignUpLogInComponent";
import MenuBarComponent from "./components/HeaderFooterComponent/MenuBarComponent";
import HomePageComonent from "./components/HomePageComponent/HomePageComonent";
import ProductCardComponent from "./common-components/ProductCardComponent";
import AllProductsComponent from "./components/ProductsComponent/AllProductsComponent";
import UserProfileComponent from "./components/UserProfileComponent/UserProfileComponent";

function App() {

  const CLIENT_ID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
  const CLIENT_URL = `/${CLIENT_ID}`

  return (
    <div className="App" style={{ display: "block" }}>
      <Routes>
        <Route path={"/:tenantId"} element={<SignUpLogInComponent />} />
        <Route path="/:tenantId/home" element={<Home />} />
        <Route path="/:tenantId/admin" element={<AdminPanelComponent />} />
        <Route path="/:tenantId/header" element={<HomePageComonent />} />
        <Route path="/:tenantId/products" element={<AllProductsComponent />} />
        <Route path="/:tenantId/profile" element={<UserProfileComponent />} />
      </Routes>
    </div>
  );
}

export default App;

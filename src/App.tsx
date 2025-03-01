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
import SingleProductComponet from "./components/ProductsComponent/SingleProductComponet";
import { useTenantId } from "../src/hooks/tenantHook";

function App() {
  // const tenantId = useTenantId();

  return (
    <div className="App" style={{ display: "block" }}>
      <Routes>
        <Route path={"/:tenantId"} element={<SignUpLogInComponent />} />
        <Route path="/:tenantId/sample" element={<Home />} />
        <Route path="/:tenantId/admin" element={<AdminPanelComponent />} />
        <Route path="/:tenantId/home" element={<HomePageComonent />} />
        <Route path="/:tenantId/products" element={<AllProductsComponent />} />
        <Route
          path="/:tenantId/products/:id"
          element={<SingleProductComponet />}
        />
        <Route path="/:tenantId/profile" element={<UserProfileComponent />} />
      </Routes>
    </div>
  );
}

export default App;

import AddProduct from "../components/AdminPanelComponent/AddProduct";
import CreateProductForm from "../components/AdminPanelComponent/CreateProductForm";
import Settings from "../components/AdminPanelComponent/SettingsComponent";
import UsersComponet from "../components/AdminPanelComponent/UsersComponet";
import { DashboardData, ProductMeta } from "./config";
import { BooleanType, DataType, InputType } from "./constants";
import { iconMap } from "./iconMap";
import { v4 as uuid } from "uuid";

export const productMetadata: ProductMeta[] = [
  {
    id: uuid(),
    key: "product_name",
    label: "Product Name",
    metric: "",
    inputType: InputType.INPUT,
    dataType: DataType.STRING,
    disabled: true
  },
  {
    id: uuid(),
    key: "condition",
    label: "Condition",
    metric: "",
    inputType: InputType.SELECT, // Dropdown for selecting condition
    dataType: DataType.STRING,
    options: '["New", "Used", "Refurbished"]',
    disabled: true
  },
  {
    id: uuid(),
    key: "description",
    label: "Description",
    metric: "",
    inputType: InputType.INPUT,
    dataType: DataType.STRING,
    disabled: true
  },
  {
    id: uuid(),
    key: "rent",
    label: "Rent",
    metric: "", // Currency symbol for rent
    inputType: InputType.INPUT,
    dataType: DataType.NUMBER,
    disabled: true
  },
  {
    id: uuid(),
    key: "product_type",
    label: "Product Type",
    metric: "",
    inputType: InputType.SELECT, // Dropdown for product types
    dataType: DataType.STRING,
    options: "",
    disabled: false
  },
];

export const dashboardData: DashboardData = {
  dashboard: {
    text: "Dashboard",
    component: <div>Dashboard</div>,
    icon: iconMap["dashboard"],
  },
  add_product: {
    text: "Add Product",
    component: <AddProduct />,
    icon: iconMap["product"],
  },
  view_edit_products: {
    text: "View/Edit Products",
    component: <div>View/Edit Products</div>,
    icon: iconMap["edit"],
  },
  bookings: {
    text: "Bookings",
    component: <div>Bookings</div>,
    icon: iconMap["bookings"],
  },
  users: {
    text: "Users",
    component: <UsersComponet />,
    icon: iconMap["users"],
  },
  manage_brand: {
    text: "Manage Brand",
    component: <Settings />,
    icon: iconMap["settings"],
  },
  create_product_form: {
    text: "Create Product Form",
    component: <CreateProductForm />,
    icon: iconMap["form"],
  },
};

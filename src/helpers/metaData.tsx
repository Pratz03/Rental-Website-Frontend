import { DashboardData, ProductMeta } from "./config";
import { InputType } from "./constants";
import { iconMap } from "./iconMap";

export const productMeta: ProductMeta[] = [
  {
    key: "milage",
    label: "Milage",
    metric: "km/l",
    inputType: InputType.INPUT
  },
  {
    key: "fuel_type",
    label: "Fuel Type",
    metric: "",
    inputType: InputType.INPUT
  },
  {
    key: "distance_driven",
    label: "Distance Driven",
    metric: "km",
    inputType: InputType.INPUT
  },
  {
    key: "age",
    label: "Age",
    metric: "years",
    inputType: InputType.INPUT
  },
  {
    key: "type",
    label: "Types",
    metric: "",
    options: ["Suv", "Sedan"],
    inputType: InputType.SELECT
  },
];

export const dashboardData: DashboardData = {
  dashboard: {
    text: "Dashboard",
    component: <div>Dashboard</div>,
    icon: iconMap["mail"]
  },
  add_product: {
    text: "Add Product",
    component: <div>Add Product</div>,
    icon: iconMap["inbox"]
  },
  view_edit_products: {
    text: "View/Edit Products",
    component: <div>View/Edit Products</div>,
    icon: iconMap["mail"]
  },
  bookings: {
    text: "Bookings",
    component: <div>Bookings</div>,
    icon: iconMap["inbox"]
  },
  users: {
    text: "Users",
    component: <div>Bookings</div>,
    icon: iconMap["mail"]
  },
  manage_brand: {
    text: "Manage Brand",
    component: <div>Manage Brand</div>,
    icon: iconMap["inbox"]
  },
}

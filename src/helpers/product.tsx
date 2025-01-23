import { ProductMeta } from "./config";
import { InputType } from "./constants";

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

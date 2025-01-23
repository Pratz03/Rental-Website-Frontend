import { BooleanType, InputType } from "./constants";

export interface ProductMeta {
    key: string;
    label: string;
    metric: string;
    options?: string[];
    inputType: InputType;
    dataType?: string;
}
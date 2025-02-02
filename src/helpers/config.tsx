import { JSX } from "react";
import { InputType } from "./constants";

export interface ProductMeta {
    id?: string;
    key?: string;
    label: string;
    metric: string;
    options?: string[];
    inputType: InputType;
    dataType?: string;
}

export interface DashboardData {
    [keyName: string]: {
        text: string;
        component: JSX.Element;
        icon: JSX.Element;
    };
}

export interface IconMap {
    [iconName: string]: JSX.Element;
}
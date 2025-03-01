import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { omit } from "lodash";
import axios from "axios";
import settingsAPI from "../../api/settingsAPI";

export interface SettingsState {
  company_name?: string;
  primary_color?: string;
  secondary_color?: string;
  text_light?: string;
  text_dark?: string;
  company_address?: string;
  email_address?: string;
  phone_number?: string;
  company_description?: string;
}

const initialState: SettingsState = {
  company_name: "",
  primary_color: "",
  secondary_color: "",
  text_light: "",
  text_dark: "",
  company_address: "",
  email_address: "",
  phone_number: "",
  company_description: "",
};

// Define API base URL
// const API_BASE_URL = "http://localhost:5000/settings";
// const AUTH_HEADER = {
//   Authorization:
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGJOYW1lIjoiY2xpZW50XzliMWRlYjRkXzNiN2RfNGJhZF85YmRkXzJiMGQ3YjNkY2I2ZCIsImlhdCI6MTczODIzNjM2OCwiZXhwIjoxNzM4MjQ3MTY4fQ.vEaYir2FP44tFhF3Qs42zV_OsWu53gKiDTA6RVVwzhk",
// };

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async () => {
    const response = await settingsAPI.getSetting();

    return response.data.result?.length ? response.data.result[0] : initialState;
  }
);

export const saveSettings = createAsyncThunk(
  "settings/saveSettings",
  async (settings: SettingsState, { dispatch }) => {
    const sanitizedSettings = omit(settings, ["id", "_persist"]);

    const response = await settingsAPI.updateSettings(sanitizedSettings);

    if (response.status !== 200) {
      throw new Error("Failed to save settings");
    }

    dispatch(setSettings(settings));
    return settings;
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsState>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;

import { SettingsState } from "../store/slices/companySettingsSlice";
import axiosInstance from "./axiosInstance"

const settingsAPI = {
    getSetting: async () => {
        return await axiosInstance.get("/settings")
    },
    updateSettings: async (settingsData: any) => {
        try {
            const response = await axiosInstance.put("/settings/update-settings", settingsData);
            return response;
        } catch (error: any) {
            console.error("Error updating settings:", error.response?.data || error.message);
            throw error;
        }
    }
    
}

export default settingsAPI;
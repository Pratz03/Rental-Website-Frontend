import axiosInstance from "./axiosInstance"

const prodcutAPI = {
    getProductFields: async () => {
        try {
            const response = await axiosInstance.get("/settings");
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateProductFields: async (fieldsData: any) => {
        try {
            const response = await axiosInstance.put("/settings/update-settings", { product_fields: fieldsData })
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default prodcutAPI;
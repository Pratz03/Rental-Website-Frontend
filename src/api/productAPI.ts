import axiosInstance from "./axiosInstance"

const prodcutAPI = {
    getProductFields: async () => {
        try {
            const response = await axiosInstance.get("/settings");
            console.log("--------", response);
            
            return response.data;
        } catch (error) {
            console.log(">>>>>>", error);
            
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
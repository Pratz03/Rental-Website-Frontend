import axiosInstance from "./axiosInstance";

const prodcutAPI = {
  getProductFields: async () => {
    try {
      const response = await axiosInstance.get("/settings");
      console.log("--------", response);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  AddProduct: async (fieldsData: any) => {
    try {
      const response = await axiosInstance.post("/products", fieldsData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getProductData: async () => {
    try {
      const response = await axiosInstance.get("/products");
      return response.data.products;
    } catch (error) {
      throw error;
    }
  },
  editProductData: async (id: string, productData: Record<string, string>) => {
    try {
      const response = await axiosInstance.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteProductData: async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default prodcutAPI;

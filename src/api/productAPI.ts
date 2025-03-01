import axiosInstance from "./axiosInstance";

const prodcutAPI = {
  getProductFields: async () => {
    try {
      const response = await axiosInstance.get("/settings");
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
  getLimitedData: async (limit: number, offset?: number) => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          limit,
          offset,
        },
      });
      return response.data.products;
    } catch (error) {
      throw error;
    }
  },
  getFilters: async () => {
    try {
      const response = await axiosInstance.get("/products/filters");
      return response.data.filters;
    } catch (error) {
      throw error;
    }
  },
  getFilteredProducts: async (
    search: string,
    filters: any,
    limit: number,
    offset?: number
  ) => {
    try {
      const response = await axiosInstance.post(
        "/products/f&s-products",
        { filters },
        { params: { search, limit, offset } }
      );
      return response.data.products;
    } catch (error) {
      throw error;
    }
  },
  mostBookedProduct: async () => {
    try {
      const response = await axiosInstance.get("/bookings/most-booked-product");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getProductById: async (id: string) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data.user;
    } catch (error) {
      throw error;
    }
  },
};

export default prodcutAPI;

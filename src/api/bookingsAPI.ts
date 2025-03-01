import axios from "axios";
import axiosInstance from "./axiosInstance";

const bookingsAPI = {
  getAllBookings: async () => {
    try {
      const response = await axiosInstance.get(
        "/bookings"
      );
      return response.data.result;
    } catch (error) {
      throw error;
    }
  },
  totalBookings: async () => {
    try {
      const response = await axiosInstance.get(
        "/bookings/bookings-today"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default bookingsAPI;

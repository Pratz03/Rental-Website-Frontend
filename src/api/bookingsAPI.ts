import axios from "axios"
import axiosInstance from "./axiosInstance";

const bookingsAPI = {
    getAllBookings: async () => {
        try {
            const response = await axiosInstance.get("http://localhost:5000/bookings");
            return response.data.result;
        } catch (error) {
            throw error
        }
    }
}

export default bookingsAPI;
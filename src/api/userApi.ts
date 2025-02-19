import axios from "axios"
import axiosInstance from "./axiosInstance";

const userAPI = {
    createUser: async (data: any, tenantId: string) => {
        return await axios.post("http://localhost:5000/users", data, {
            headers: {
                "Tenant-ID": tenantId
            }
        })
    },
    getAllUsers: async () => {
        try {
            const response = await axiosInstance.get("http://localhost:5000/users");
            return response.data.users;
        } catch (error) {
            throw error
        }
    }
}

export default userAPI;
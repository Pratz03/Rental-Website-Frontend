import axios from "axios"

const userAPI = {
    createUser: async (data: any, tenantId: string) => {
        return await axios.post("http://localhost:5000/users", data, {
            headers: {
                "Tenant-ID": tenantId
            }
        })
    }
}

export default userAPI;
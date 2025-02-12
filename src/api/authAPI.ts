import axios from "axios";

export const login = async (username: string, password: string, tenantId: string) => {
  const response = await axios.post(
    "http://localhost:5000/auth/login",
    { username, password },
    {
      headers: {
        "Tenant-ID": tenantId,
      },
    }
  );
  localStorage.setItem("authToken", response.data.accessToken); // Store token
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

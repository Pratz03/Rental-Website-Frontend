import axios from "axios";

export const login = async (
  username: string,
  password: string,
  tenantId: string
) => {
  console.log(">>", username, password);

  const response = await axios
    .post(
      "http://localhost:5000/auth/login",
      { username, password },
      {
        headers: {
          "Tenant-ID": tenantId,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response && error.response.status === 500) {
        alert("Internal server error!");
      }
    });
  localStorage.setItem("authToken", response?.data.accessToken); // Store token
  return response?.data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

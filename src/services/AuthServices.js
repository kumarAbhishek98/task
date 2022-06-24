import { API } from "../api";

export const LoginService = async (data) => {
  try {
    let response = await API.post("/auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

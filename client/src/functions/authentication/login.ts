// Interfaces and Types
import { User, UserCreationCredentials } from "../../constants/interfaces/user";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../network/fetchData";

const login = async (credentials: UserCreationCredentials): Promise<User> => {
  const response = await fetchData("/api/users/login", {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export default login;

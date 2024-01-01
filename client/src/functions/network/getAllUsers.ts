// Interfaces and Types
import { UserReturnedFromDB } from "../../constants/interfaces/user";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const getAllUsers = async (): Promise<UserReturnedFromDB[]> => {
  const response = await fetchData("/api/users/get-all-users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

export default getAllUsers;

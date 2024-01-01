// Interfaces and Types
import { UserReturnedFromDB } from "../../constants/interfaces/user";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const getUser = async (userId: string): Promise<UserReturnedFromDB> => {
  const response = await fetchData("/api/users/get-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ userId: userId }),
  });
  return response.json();
};

export default getUser;

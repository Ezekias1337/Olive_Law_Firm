// Interfaces and Types
import { User } from "../../constants/interfaces/user";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../network/fetchData";

const getLoggedInUser = async (): Promise<User> => {
  const response = await fetchData("/api/users", { method: "GET" });
  return response.json();
};

export default getLoggedInUser;

/* 
    No credentials are required when the back end and front end are on the same url, but if not
    you will need to add configuration in the second param of fetchData
*/

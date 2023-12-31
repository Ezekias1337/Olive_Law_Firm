// Functions, Helpers, Utils, and Hooks
import fetchData from "../network/fetchData";

const logout = async () => {
  await fetchData("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

export default logout;

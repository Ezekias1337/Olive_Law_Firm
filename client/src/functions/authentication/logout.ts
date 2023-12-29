// Functions, Helpers, Utils, and Hooks
import fetchData from "../network/fetchData";

const logout = async () => {
  await fetchData("/api/users/logout", {
    method: "POST",
  });
};

export default logout;

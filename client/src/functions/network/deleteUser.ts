// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const deleteUser = async (userId: string) => {
  await fetchData("/api/users/delete-user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ userId: userId }),
  });
};

export default deleteUser;

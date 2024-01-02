// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const deleteCase = async (caseId: string) => {
  await fetchData("/api/cases/delete-case", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ caseId: caseId }),
  });
};

export default deleteCase;

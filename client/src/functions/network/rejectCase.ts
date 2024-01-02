// Interfaces and Types
import { CaseReturnedFromDB } from "../../constants/interfaces/case";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const rejectCase = async (caseId: string): Promise<CaseReturnedFromDB> => {
  const response = await fetchData("/api/cases/reject-case", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ caseId: caseId }),
  });
  return response.json();
};

export default rejectCase;

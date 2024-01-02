// Interfaces and Types
import { CaseReturnedFromDB } from "../../constants/interfaces/case";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const approveCase = async (caseId: string): Promise<CaseReturnedFromDB> => {
  const response = await fetchData("/api/cases/approve-case", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ caseId: caseId }),
  });
  return response.json();
};

export default approveCase;

// Interfaces and Types
import { CaseReturnedFromDB } from "../../constants/interfaces/case";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const getAllCases = async (): Promise<CaseReturnedFromDB[]> => {
  const response = await fetchData("/api/cases/get-all-cases", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response.json();
};

export default getAllCases;

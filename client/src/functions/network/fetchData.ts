const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const ORIGIN_URL_BASE = import.meta.env.VITE_ORIGIN_URL_BASE;

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const baseURL = `${ORIGIN_URL_BASE}:${BACKEND_PORT}`;
  const url = `${baseURL}${input}`;

  const response = await fetch(url, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
};

export default fetchData;

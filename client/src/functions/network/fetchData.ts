const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const baseURL = 'http://127.0.0.1:5000';
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

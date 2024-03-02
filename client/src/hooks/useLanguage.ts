import { useSearchParams } from "react-router-dom";

const useLanguage = () => {
  const [languageParams, setLanguageParams] = useSearchParams({
    language: "English",
  });

  // Check if the 'language' parameter is present in the URL
  const urlLanguage = languageParams.get("language");

  // Set the initial language based on the URL parameter or use the default
  const initialLanguage = urlLanguage || "English";

  return initialLanguage;
};

export default useLanguage;

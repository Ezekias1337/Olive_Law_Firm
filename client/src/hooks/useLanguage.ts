import { useSearchParams } from "react-router-dom";

const useLanguage = (): string => {
  const [languageParams, setLanguageParams] = useSearchParams({
    language: "English",
  });
  const currentLanguage = languageParams.get("language") || "English"; // Provide a default value if it's null

  return currentLanguage!;
};

export default useLanguage;

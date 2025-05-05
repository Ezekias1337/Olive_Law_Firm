// Library Imports
import { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
// Functions, Helpers, Utils, and Hooks
import useCookieConsent from "./useCookieConsent";
import useGlobalPrivacyControl from "./useGlobalPrivacyControl";

const usePageTracking = () => {
  const location = useLocation();
  const hasCookieConsent = useCookieConsent();
  const hasGlobalPrivacyControl = useGlobalPrivacyControl();

  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const handlePageVisit = useCallback(() => {
    if (!hasCookieConsent || hasGlobalPrivacyControl) return;

    const currentVisits = JSON.parse(localStorage.getItem("pageVisits") || "[]");
    currentVisits.push({
      path: location.pathname,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("pageVisits", JSON.stringify(currentVisits));
  }, [location.pathname, hasCookieConsent, hasGlobalPrivacyControl]);

  useEffect(() => {
    if (hasHydrated) {
      handlePageVisit();
    }
  }, [location.pathname, hasHydrated, handlePageVisit]);
};

export default usePageTracking;

// Functions, Helpers, Utils, and Hooks
import fetchData from "../functions/network/fetchData";
// Interfaces and Types
import { UserAgentInfo } from "../hooks/useDeviceInfo";
// Constants
const ANALYTICS_SERVER_URL = import.meta.env.VITE_ANALYTICS_SERVER_URL;

const sendAnalytics = async (userIdentifier: string | null, userAgentInfo: UserAgentInfo) => {
    const pageVisits = JSON.parse(localStorage.getItem("pageVisits") || "[]");
    if (userIdentifier === null) {
        return
    }

    if (pageVisits.length > 0) {
        const payload = {
            userIdentifier,
            userAgentInfo,
            pageVisits,
            baseUrl: window.location.origin,
        };

        console.log(payload);

        fetchData("", {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }, ANALYTICS_SERVER_URL);
    }
};

export default sendAnalytics;
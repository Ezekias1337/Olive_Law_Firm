// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User Pages
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import CaseSubmitted from "./pages/CaseSubmitted";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AboutUs from "./pages/AboutUs";
import PracticeAreas from "./pages/PracticeAreas";
import ClientReviews from "./pages/ClientReviews";
import OurResults from "./pages/OurResults";
import FAQ from "./pages/FAQ";
import CommunityInteraction from "./pages/CommunityInteraction";
import AttorneyProfile from "./pages/AttorneyProfile";
import DoNotSell from "./pages/DoNotSell";
// Admin Pages
import Login from "./pages/Login";
import AdminHome from "./pages/AdminHome";
import ManageEmployees from "./pages/ManageEmployees";
import ViewNewCases from "./pages/ViewNewCases";
import ViewAllCases from "./pages/ViewAllCases";
//404 Page
import PageNotFound from "./pages/PageNotFound";
// Link scroll fix
import ScrollToTop from "./components/general-page-layout/ScrollToTop";
// Hooks
import useAnalytics from "./hooks/useAnalytics";
import usePageTracking from "./hooks/usePageTracking";
// CSS
import "./css/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppWithTracking />
    </BrowserRouter>
  );
};

const AppWithTracking = () => {
  useAnalytics();
  usePageTracking();

  return (
    <Routes>
      {/* Client Facing */}
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/case-submitted" element={<CaseSubmitted />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/attorney-profile/:lawyer" element={<AttorneyProfile />} />
      <Route path="/practice-areas" element={<PracticeAreas />} />
      <Route path="/client-reviews" element={<ClientReviews />} />
      <Route path="/faqs" element={<FAQ />} />
      <Route path="/community-involvement" element={<CommunityInteraction />} />
      <Route path="/our-results" element={<OurResults />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfUse />} />
      <Route path="/do-not-sell" element={<DoNotSell />} />
      {/* Admin Only */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/manage-employees" element={<ManageEmployees />} />
      <Route path="/view-new-cases" element={<ViewNewCases />} />
      <Route path="/analytics-dashboard" element={<Home />} />
      <Route path="/view-all-cases" element={<ViewAllCases />} />
      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
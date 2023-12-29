// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User Pages
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AboutUs from "./pages/AboutUs";
import PracticeAreas from "./pages/PracticeAreas";
import ClientReviews from "./pages/ClientReviews";
import OurResults from "./pages/OurResults";
import FAQ from "./pages/FAQ";
import CommunityInteraction from "./pages/CommunityInteraction"
import AttorneyProfile from "./pages/AttorneyProfile"
// Admin Pages
import Login from "./pages/Login";

//404 Page
import PageNotFound from "./pages/PageNotFound";
// Link scroll fix
import ScrollToTop from "./components/general-page-layout/ScrollToTop";

// CSS
import "./css/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Client Facing */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/attorney-profile/:lawyer" element={<AttorneyProfile />}></Route>
        <Route path="/practice-areas" element={<PracticeAreas />}></Route>
        <Route path="/client-reviews" element={<ClientReviews />}></Route>
        <Route path="/faqs" element={<FAQ />}></Route>
        <Route path="/community-interaction" element={<CommunityInteraction />}></Route>
        <Route path="/our-results" element={<OurResults />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-of-service" element={<TermsOfUse />}></Route>
        {/* Admin Only */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/credential-management" element={<Home />}></Route>
        <Route path="/new-cases" element={<Home />}></Route>
        <Route path="/analytics-dashboard" element={<Home />}></Route>
        <Route path="/case-dashboard" element={<Home />}></Route>
        {/* 404 */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

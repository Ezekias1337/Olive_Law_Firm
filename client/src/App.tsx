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

// Admin Pages
import Login from "./pages/Login";

//404 Page
import PageNotFound from "./pages/PageNotFound";
// CSS
import "./css/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Facing */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/lawyer-profile" element={<Home />}></Route>
        <Route path="/practice-areas" element={<PracticeAreas />}></Route>
        <Route path="/client-reviews" element={<ClientReviews />}></Route>
        <Route path="/faqs" element={<Home />}></Route>
        <Route path="/community-interaction" element={<Home />}></Route>
        <Route path="/our-results" element={<Home />}></Route>
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

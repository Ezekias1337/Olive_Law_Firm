// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User Pages
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Admin Pages
import Login from "./pages/Login";

// CSS
import "./css/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Facing */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<HomePage />}></Route>
        <Route path="/lawyer-profile" element={<HomePage />}></Route>
        <Route path="/practice-areas" element={<HomePage />}></Route>
        <Route path="/client-testimonials" element={<HomePage />}></Route>
        <Route path="/faqs" element={<HomePage />}></Route>
        <Route path="/community-interaction" element={<HomePage />}></Route>
        <Route path="/our-results" element={<HomePage />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-of-service" element={<TermsOfUse />}></Route>
        {/* Admin Only */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/credential-management" element={<HomePage />}></Route>
        <Route path="/new-cases" element={<HomePage />}></Route>
        <Route path="/analytics-dashboard" element={<HomePage />}></Route>
        <Route path="/case-dashboard" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks

// Constants

// Components
import { Footer } from "../components/general-page-layout/footer/Footer";
import {NavBar} from "../components/general-page-layout/navbar/Navbar"
// CSS
import "../css/page-specific/home.scss";

// Assets and Images
import logoNoText from "../assets/images/logo/Logo_No_Text.png";

export const HomePage = () => {
  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} />
      <Footer />
      
    </div>
  );
};

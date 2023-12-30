// Library Imports
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers and Utils
import getLoggedInUser from "../functions/authentication/getLoggedInUser";
import logout from "../functions/authentication/logout";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { User, UserReturnedFromDB } from "../constants/interfaces/user";
// Constants

// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Loader } from "../components/general-page-layout/loader/Loader";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/privacy-policy.scss";

const AdminHome = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const [userData, setUserData] = useState<UserReturnedFromDB>();
  const [priviledgeLevel, setPriviledgeLevel] = useState<string>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userData) {
          const newData = await getLoggedInUser();
          setUserData(newData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userData]);

  useEffect(() => {
    if (!priviledgeLevel && userData) {
      if (userData.role.includes("Admin Assistant")) {
        setPriviledgeLevel("Admin Assistant");
      } else if (userData.role.includes("Admin")) {
        setPriviledgeLevel("Admin Assistant");
      } else {
        setPriviledgeLevel("Employee");
      }
    }
  }, [userData]);

  return (
    <div className="container-fluid admin-home-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader
        language={reduxLanguage}
        title={{
          english: "Administrator Dashboard",
          spanish: "Panel de administrador",
        }}
        includeBanner
      />

      <div className="admin-home-options-wrapper padding-left-and-right">
        {!userData ? (
          <Loader variant="primary" />
        ) : (
          <>
            <h2>Welcome, {userData.name}</h2>
            <h5>You have priviledge level of {priviledgeLevel}</h5>
            <Button
              text="LOGOUT"
              variant="primary"
              onClickHandler={async () => {
                await logout();
              }}
            />
          </>
        )}
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default AdminHome;

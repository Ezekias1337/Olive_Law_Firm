// Library Imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers and Utils
import getLoggedInUser from "../functions/authentication/getLoggedInUser";
import logout from "../functions/authentication/logout";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { UserReturnedFromDB } from "../constants/interfaces/user";
// Constants

// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Loader } from "../components/general-page-layout/loader/Loader";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
import {
  faFile,
  faClockRotateLeft,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
// CSS
import "../css/page-specific/admin-home.scss";

/* 
  Need to display admin navbar
  
  On login user needs to see:
  Logout
  View new cases
    if accepting case show page that displays same info and has
    button to go back to new cases page
  Edit Account
  view past cases
    if Admin
      view employees and be able to edit them
*/

const AdminHome = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserReturnedFromDB>();
  const [priviledgeLevel, setPriviledgeLevel] = useState<string>();
  const [menuOptionsToDisplay, setMenuOptionsToDisplay] = useState([
    {
      text: "View New Cases",
      variant: "secondary",
      icon: faFile,
      leftIcon: true,
      url: "/view-new-cases",
      buttonSize: "large",
    },
    {
      text: "View Past Cases",
      variant: "secondary",
      icon: faClockRotateLeft,
      leftIcon: true,
      url: "/view-past-cases",
      buttonSize: "large",
    },
    {
      text: "Edit Account",
      variant: "secondary",
      icon: faUser,
      leftIcon: true,
      url: "/edit-account",
      buttonSize: "large",
    },
  ]);

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

  useEffect(() => {
    if (
      (priviledgeLevel && priviledgeLevel === "Admin") ||
      priviledgeLevel === "Admin Assistant"
    ) {
      const tempMenuArray = [...menuOptionsToDisplay];
      tempMenuArray.push({
        text: "Manage Employees",
        variant: "secondary",
        icon: faUsers,
        leftIcon: true,
        url: "/manage-employees",
        buttonSize: "large",
      });
      setMenuOptionsToDisplay(tempMenuArray);
    }
  }, [priviledgeLevel]);

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
            <div className="">
              <h2>Welcome, {userData.name}</h2>
              <h5>You have priviledge level of {priviledgeLevel}</h5>
            </div>

            <div className="">
              {menuOptionsToDisplay.map((button) => {
                return (
                  <Button
                    text={button.text}
                    variant={button.variant}
                    icon={button.icon}
                    leftIcon={button.leftIcon}
                    buttonSize="large"
                    url={button.url}
                    key={button.text}
                  ></Button>
                );
              })}
            </div>

            <Button
              text="LOGOUT"
              variant="primary"
              onClickHandler={async () => {
                await logout();
                navigate("/login");
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

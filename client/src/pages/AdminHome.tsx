// Library Imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// Functions, Helpers and Utils
import getLoggedInUser from "../functions/authentication/getLoggedInUser";
import logout from "../functions/authentication/logout";
import getAllUsers from "../functions/network/getAllUsers";
import getUser from "../functions/network/getUser";
import deleteUser from "../functions/network/deleteUser";
import fetchData from "../functions/network/fetchData";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
// Constants
import {
  textOnlyPattern,
  emailPattern,
  textAndNumbersAndSpecialCharsNoSpacesPattern,
} from "../../../shared/constants/regexPatterns";

// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { UserReturnedFromDB } from "../constants/interfaces/user";
import { FormState } from "../constants/interfaces/InputFieldProps";
import { Field, InputField } from "../components/form/dependents/formTypes";
import { FormEvent } from "react";
import { SetStateHookForm } from "../constants/interfaces/InputFieldProps";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Loader } from "../components/general-page-layout/loader/Loader";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
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
  const [editAccountModalOpen, setEditAccountModalOpen] = useState(false);
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const toggleEditAccountModal = () =>
    setEditAccountModalOpen(!editAccountModalOpen);

  const [menuOptionsToDisplay, setMenuOptionsToDisplay] = useState([
    {
      text: "View New Cases",
      variant: "secondary",
      icon: faFile,
      leftIcon: true,
      url: "/view-new-cases",
      buttonSize: "medium",
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
      buttonSize: "large",
      onClick: toggleEditAccountModal,
    },
  ]);

  const editAccountInfoInputFields: Field[] = [
    {
      name: "Name",
      label: "Name",
      additionalClassNames: "",
      placeholder: "Name",
      defaultValue: userData !== undefined ? userData.name : "",
      theme: "light",
      columns: "12",
      type: "text",
      inputType: "text",
      inputMode: "text",
      pattern: textOnlyPattern,
      maxLength: 50,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
    {
      name: "Role",
      label: "Role",
      additionalClassNames: "",
      defaultValue: userData !== undefined ? userData.role[0] : "",
      theme: "light",
      columns: "12",
      type: "dropdown",
      inputType: "text",
      inputMode: "text",
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      dropdownOptions: ["Admin", "Admin Assistant", "Employee"],
      required: true,
    },
    {
      name: "Email Address",
      label: "Email Address",
      additionalClassNames: "",
      placeholder: "receptionist@osa-law.com",
      defaultValue: userData !== undefined ? userData.emailAddress : "",
      theme: "light",
      columns: "12",
      type: "email",
      inputType: "email",
      inputMode: "email",
      pattern: emailPattern,
      maxLength: 50,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
    {
      name: "Password",
      label: "Password",
      additionalClassNames: "",
      placeholder: "•••••••",
      theme: "light",
      columns: "12",
      type: "password",
      inputMode: "text",
      pattern: textAndNumbersAndSpecialCharsNoSpacesPattern,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
  ];

  const customSubmitArgsEditEmployee = {
    argument1: editAccountInfoInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/users/update-user",
    argument5: "POST",
  };

  const submitEmployeeInfoEdit = async (
    e: FormEvent,
    inputFields: InputField[],
    formState: FormState,
    setErrorHook: SetStateHookForm,
    apiEndpoint: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  ): Promise<any> => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const formStateWithDefaultValues = { ...formState };

    inputFields.forEach((field) => {
      if (!formState[camelCasifyString(field.name)]) {
        if (field.defaultValue) {
          formStateWithDefaultValues[camelCasifyString(field.name)] =
            field.defaultValue;
        } else {
          errors[camelCasifyString(field.name)] = `${field.name} is required`;
        }
      }
    });

    setErrorHook(errors);

    if (Object.keys(errors).length === 0) {
      const response = await fetchData(apiEndpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formStateWithDefaultValues),
      });

      /* 
          Update the card client side so user doesnt have to refresh to see the change
      */

      try {
        const newData = await getLoggedInUser();
        setUserData(newData);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }

      toggleEditAccountModal();
      setFormInputData({});
      setFormErrorData({});
      return response.json();
    }
  };

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
              {menuOptionsToDisplay.map((button, index) => {
                return (
                  <Button
                    text={button.text}
                    variant={button.variant}
                    icon={button.icon}
                    leftIcon={button.leftIcon}
                    buttonSize="medium"
                    url={button.url}
                    onClickHandler={
                      button.onClick !== undefined ? button.onClick : undefined
                    }
                    key={index}
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

      <Modal
        isOpen={editAccountModalOpen}
        toggle={toggleEditAccountModal}
        size="lg"
      >
        <ModalHeader toggle={toggleEditAccountModal}>
          Edit Employee Information
        </ModalHeader>
        <ModalBody>
          <Form
            language={reduxLanguage}
            formTheme="light"
            inputFields={editAccountInfoInputFields}
            apiEndpoint="/api/users/update-user"
            formId="edit-employee-form"
            setStateHook={setFormInputData}
            setErrorHook={setFormErrorData}
            formState={formInputData}
            formErrors={formErrorData}
            button1Text={reduxLanguage === "English" ? "Submit" : "Entregar"}
            button1Variant="primary"
            customSubmitFunction={(e) =>
              submitEmployeeInfoEdit(
                e,
                editAccountInfoInputFields,
                formInputData,
                setFormErrorData,
                "/api/users/update-user",
                "POST"
              )
            }
            customSubmitArgs={customSubmitArgsEditEmployee}
          />
        </ModalBody>
      </Modal>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default AdminHome;

// Library Imports
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers and Utils
import getAllUsers from "../functions/network/getAllUsers";
import getUser from "../functions/network/getUser";
import deleteUser from "../functions/network/deleteUser";
import fetchData from "../functions/network/fetchData";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { UserReturnedFromDB } from "../constants/interfaces/user";
import { Field, InputField } from "../components/form/dependents/formTypes";
import { FormState } from "../constants/interfaces/InputFieldProps";
import { FormEvent } from "react";
import { SetStateHookForm } from "../constants/interfaces/InputFieldProps";
// Constants
import {
  textOnlyPattern,
  emailPattern,
  textAndNumbersAndSpecialCharsNoSpacesPattern,
} from "../../../shared/constants/regexPatterns";
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Loader } from "../components/general-page-layout/loader/Loader";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { Card } from "../components/card/Card";
import { Form } from "../components/form/Form";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { faPencil, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
// CSS
import "../css/page-specific/manage-employees.scss";
// Assets and Images
import CourthouseImage from "../assets/images/backgrounds/Courthouse.png";

const ManageEmployees = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const [employeeData, setEmployeeData] = useState<UserReturnedFromDB[]>();
  const [selectedEmployee, setSelectedEmployee] =
    useState<UserReturnedFromDB>();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addNewEmployeeModalOpen, setAddNewEmployeeModal] = useState(false);
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const toggleEditModal = () => {
    if (editModalOpen) {
      setSelectedEmployee(undefined);
    }
    setEditModalOpen(!editModalOpen);
  };
  const toggleAddNewEmployeeModal = () =>
    setAddNewEmployeeModal(!addNewEmployeeModalOpen);

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
        const newData = await getAllUsers();
        setEmployeeData(newData);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }

      toggleEditModal();
      setFormInputData({});
      setFormErrorData({});
      return response.json();
    }
  };

  const createNewEmployee = async (
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
        Add the card client side so user doesnt have to refresh to see the change
      */
      try {
        const newData = await getAllUsers();
        setEmployeeData(newData);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }

      toggleAddNewEmployeeModal();
      setFormInputData({});
      setFormErrorData({});
      return response.json();
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!employeeData) {
          const newData = await getAllUsers();
          setEmployeeData(newData);
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchUserData();
  }, [employeeData]);

  useEffect(() => {
    console.log(selectedEmployee);
  }, [selectedEmployee]);

  const editInfoInputFields: Field[] = [
    {
      name: "Name",
      label: "Name",
      additionalClassNames: "",
      placeholder: "Name",
      defaultValue: selectedEmployee !== undefined ? selectedEmployee.name : "",
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
      name: "Email Address",
      label: "Email Address",
      additionalClassNames: "",
      placeholder: "receptionist@osa-law.com",
      defaultValue:
        selectedEmployee !== undefined ? selectedEmployee.emailAddress : "",
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
      name: "Role",
      label: "Role",
      additionalClassNames: "",
      defaultValue:
        selectedEmployee !== undefined ? selectedEmployee.role[0] : "",
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
  ];

  const addNewEmployeeInputFields: Field[] = [
    {
      name: "Name",
      label: "Name",
      additionalClassNames: "",
      placeholder: "Name",
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
      defaultValue: "Employee",
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
    argument1: editInfoInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/users/update-user",
    argument5: "POST",
  };

  const customSubmitArgsAddEmployee = {
    argument1: editInfoInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/users/update-user",
    argument5: "POST",
  };

  return (
    <div className="container-fluid manage-employees-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader
        language={reduxLanguage}
        title={{
          english: "Manage Employees",
          spanish: "Administrar Empleados",
        }}
        includeBanner
      />

      <div className="manage-employees-wrapper padding-left-and-right">
        <Button
          text="Add New Employee"
          buttonId="add-new-employee"
          variant="neutral"
          icon={faPlus}
          leftIcon
          onClickHandler={() => toggleAddNewEmployeeModal()}
        />

        <div className="manage-employees-cards display-flex">
          {!employeeData ? (
            <Loader variant="primary" />
          ) : (
            employeeData.map((employee) => {
              return (
                <Card
                  cardVariant="imageAndBody"
                  headerText={employee.name}
                  buttonCount={2}
                  imageSource={CourthouseImage}
                  button1Text="Edit"
                  button1OnClick={async () => {
                    const userToSet = await getUser(employee._id);
                    setSelectedEmployee(userToSet);
                    toggleEditModal();
                  }}
                  button1Icon={faPencil}
                  button2Text="Delete"
                  button2OnClick={async () => {
                    await deleteUser(employee._id);

                    // Delete card from client side
                    const newUserArray = [...employeeData];
                    const deletedUserIndex = newUserArray.findIndex(
                      (emp) => emp._id === employee._id
                    );
                    newUserArray.splice(deletedUserIndex);

                    setEmployeeData(newUserArray);
                  }}
                  button2Icon={faTrash}
                  key={employee._id}
                />
              );
            })
          )}
        </div>
      </div>

      <div className="edit-employee-modal-wrapper">
        <Modal isOpen={editModalOpen} toggle={toggleEditModal} size="lg">
          <ModalHeader toggle={toggleEditModal}>
            Edit Employee Information
          </ModalHeader>
          <ModalBody>
            <Form
              language={reduxLanguage}
              formTheme="light"
              inputFields={editInfoInputFields}
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
                  editInfoInputFields,
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

        <Modal
          isOpen={addNewEmployeeModalOpen}
          toggle={toggleAddNewEmployeeModal}
          size="lg"
        >
          <ModalHeader toggle={toggleAddNewEmployeeModal}>
            Add New Employee
          </ModalHeader>
          <ModalBody>
            <Form
              language={reduxLanguage}
              formTheme="light"
              inputFields={addNewEmployeeInputFields}
              apiEndpoint="/api/users/create-user"
              formId="edit-employee-form"
              setStateHook={setFormInputData}
              setErrorHook={setFormErrorData}
              formState={formInputData}
              formErrors={formErrorData}
              button1Text={reduxLanguage === "English" ? "Submit" : "Entregar"}
              button1Variant="primary"
              customSubmitFunction={(e) =>
                createNewEmployee(
                  e,
                  addNewEmployeeInputFields,
                  formInputData,
                  setFormErrorData,
                  "/api/users/create-user",
                  "POST"
                )
              }
              customSubmitArgs={customSubmitArgsAddEmployee}
            />
          </ModalBody>
        </Modal>
      </div>
      <CookieBanner
        bodyText={
          reduxLanguage === "English"
            ? "To ensure that you have the best possible experience while visiting us, we use cookies and similar technologies."
            : "Para garantizar que tenga la mejor experiencia posible mientras nos visita, utilizamos cookies y tecnologías similares."
        }
        button1={{
          text: "Dismiss",
          variant: "primary",
          buttonSize: "small",
        }}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default ManageEmployees;

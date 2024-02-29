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
import getCase from "../functions/network/getCase";
import getAllCases from "../functions/network/getAllCases";
import deleteCase from "../functions/network/deleteCase";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
import { chunkArray } from "../../../shared/utils/arrays/chunkArray";
// Constants
import {
  textOnlyPattern,
  emailPattern,
  textAndNumbersAndSpecialCharsNoSpacesPattern,
} from "../../../shared/constants/regexPatterns";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { CaseReturnedFromDB } from "../constants/interfaces/case";
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
import { SearchInput } from "../components/input-fields/SearchInput";
import { Pagination } from "../components/general-page-layout/pagination/Pagination";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { Card } from "../components/card/Card";
import { ViewCaseCard } from "../components/page-specific/view-case/ViewCaseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faWarning } from "@fortawesome/free-solid-svg-icons";
// CSS
import "../css/page-specific/admin-home.scss";
// Assets and Images
import UserIcon from "../assets/images/user_icon.png";

const ViewAllCases = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const [casesData, setCasesData] = useState<CaseReturnedFromDB[]>();
  const [filteredCases, setFilteredCases] = useState<CaseReturnedFromDB[]>();
  const [viewCaseModalOpen, setViewCaseModalOpen] = useState(false);
  const [caseToView, setCaseToView] = useState<CaseReturnedFromDB>();
  const [fetchErrorMessage, setFetchErrorMessage] = useState<string>();
  const [filterData, setFilterData] = useState<FormState>({
    searchFilter: "",
  });
  const [filterError, setFilterError] = useState<FormState>({});

  const [filterChunkedArray, setFilterChunkedArray] = useState<
    CaseReturnedFromDB[][]
  >([]);
  const [filterChunkedArrayIndex, setFilterChunkedArrayIndex] = useState(0);
  const [filterChunkedArraySize, setFilterChunkedArraySize] = useState(16);
  const [filterCurrentPage, setFilterCurrentPage] = useState(1);

  const toggleCaseModal = () => {
    if (viewCaseModalOpen) {
      setCaseToView(undefined);
    }
    setViewCaseModalOpen(!viewCaseModalOpen);
  };

  useEffect(() => {
    const fetchCasesData = async () => {
      try {
        if (!casesData) {
          const casesData = await getAllCases();
          setCasesData(casesData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setFetchErrorMessage(
          "Error fetching cases data, try refreshing the page."
        );
      }
    };

    fetchCasesData();
  }, [casesData]);

  useEffect(() => {
    if (casesData) {
      const usersInput: string = filterData.searchFilter
        .toString()
        .toLowerCase();

      const tempFilteredArray = casesData.filter((singleCase) =>
        singleCase.name.toLowerCase().includes(usersInput)
      );
      setFilteredCases(tempFilteredArray);
    }
  }, [casesData, filterData.searchFilter]);

  useEffect(() => {
    if (filteredCases) {
      setFilterChunkedArray(chunkArray(filteredCases, filterChunkedArraySize));
    }
  }, [filteredCases, filterChunkedArraySize]);

  return (
    <div className="container-fluid view-all-cases-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader
        language={reduxLanguage}
        title={{
          english: "View All Cases",
          spanish: "Ver Todos Los Casos",
        }}
        includeBanner
      />

      <div className="view-all-cases-filters-wrapper padding-left-and-right">
        <SearchInput
          name="Search Filter"
          label=""
          theme="light"
          required={false}
          setStateHook={setFilterData}
          setErrorHook={setFilterError}
        />
      </div>

      <div className="view-all-cases-wrapper display-flex justify-content-center">
        {fetchErrorMessage !== undefined ? (
          <div className="failed-to-fetch-warning">
            <h2>
              <FontAwesomeIcon icon={faWarning} /> {fetchErrorMessage}
            </h2>
          </div>
        ) : !casesData ? (
          <Loader variant="primary" />
        ) : (
          filterChunkedArray[filterChunkedArrayIndex]?.map((individualCase) => {
            return (
              <Card
                cardVariant="imageAndBody"
                headerText={individualCase.name}
                buttonCount={2}
                imageSource={UserIcon}
                button1Variant="neutral"
                button1Icon={faEye}
                button1OnClick={async () => {
                  const caseFromDB = await getCase(individualCase._id);
                  setCaseToView(caseFromDB);
                  toggleCaseModal();
                }}
                button2Variant="error"
                button2Icon={faTrash}
                button2OnClick={async () => {
                  await deleteCase(individualCase._id);

                  // Delete card from client side
                  const newCasesArray = [...casesData];
                  const deletedUserIndex = newCasesArray.findIndex(
                    (caseToDelete) => caseToDelete._id === individualCase._id
                  );
                  newCasesArray.splice(deletedUserIndex);

                  setCasesData(newCasesArray);
                }}
                key={individualCase._id}
              />
            );
          })
        )}
      </div>
      <div className="case-filtering-section display-flex justify-content-center">
        <Pagination
          setChunkedArrayIndex={setFilterChunkedArrayIndex}
          numberOfPages={
            filterChunkedArray !== undefined ? filterChunkedArray.length : 0
          }
          defaultChunkSize={16}
          currentPage={filterCurrentPage}
          setCurrentPage={setFilterCurrentPage}
        />
      </div>

      <Modal isOpen={viewCaseModalOpen} toggle={toggleCaseModal} size="lg">
        <ModalHeader toggle={toggleCaseModal}>Case Information</ModalHeader>
        <ModalBody>
          <ViewCaseCard
            name={caseToView?.name}
            phoneNumber={caseToView?.phoneNumber}
            emailAddress={caseToView?.emailAddress}
            preferredLanguage={caseToView?.preferredLanguage}
            dateOfIncident={caseToView?.dateOfIncident}
            treatmentStatus={caseToView?.treatmentStatus}
            incidentDescription={caseToView?.incidentDescription}
          />
        </ModalBody>
      </Modal>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default ViewAllCases;

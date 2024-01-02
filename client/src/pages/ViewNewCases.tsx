// Library Imports
import { useSelector, useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
// Redux
import { updatePendingCases as updatePendingCasesAction } from "../redux/action-creators/caseCreators";
// Functions, Helpers, and Util
import getPendingCases from "../functions/network/getPendingCases";
import approveCase from "../functions/network/approveCase";
import rejectCase from "../functions/network/rejectCase";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../../shared/constants/interfaces/SocketInterfaces";
import { CaseReturnedFromDB } from "../constants/interfaces/case";
// Constants

// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { ViewCaseCard } from "../components/page-specific/view-case/ViewCaseCard";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/cases.scss";

const ViewNewCases = () => {
  const dispatch = useDispatch();
  const updatePendingCases = bindActionCreators(
    updatePendingCasesAction,
    dispatch
  );

  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const pendingCases = useSelector(
    (state: ReduxStoreState) => state.cases.contents
  );
  const [pendingCasesInQueue, setPendingCasesInQueue] = useState<Boolean>();
  const [displayedCase, setDisplayedCase] = useState<CaseReturnedFromDB>();
  const [mockCaseApproval, setMockCaseApproval] = useState(false);

  /* 
    Page should be logged into at beginning of day. First it should fetch list
    of pending cases from DB
      
    ! LATER REFACTOR TO PUT PENDINGCASES IN REDUX  
    ! For now using findOne command in DB, this will be changed later
    
      if no pending cases display message that awaiting cases, and use
      websocket to wait for new cases
      
      If pending cases display the card with customer's info, and after running
      out use websocket to wait for new cases
  */

  useEffect(() => {
    const fetchPendingCases = async () => {
      try {
        if (pendingCases.length === 0) {
          const newData = await getPendingCases();
          if (newData?.length === 0) {
            setPendingCasesInQueue(false);
          }
          updatePendingCases(newData);
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchPendingCases();
  }, [pendingCases]);

  useEffect(() => {
    if (pendingCases.length !== 0 && !displayedCase) {
      setDisplayedCase(pendingCases[0]);
      const notifaction_sound = new Audio(
        "src/assets/audio/notifaction_sound.mp3"
      );
      //notifaction_sound.play();
    }
  }, [pendingCases]);

  /* 
    ! Connect to Websockets only if all cases handled from initial fetch are done
    On server deployment this needs to be https and use ENV for url
  */
  useEffect(() => {
    if (pendingCasesInQueue === false) {
      const socketServerURL = "http://127.0.0.1:5000"; // Set your server URL here

      // Establish socket connection
      const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
        io(socketServerURL);

      // Event listener for connection event
      socket.on("connect", () => {
        console.log("Connected to the server");
      });

      socket.on("connect_error", (error) => {
        console.error("Connection error:", error);
      });

      // Cleanup the socket connection when the component unmounts
      return () => {
        socket.disconnect();
      };
    }
  }, [pendingCasesInQueue]);

  return (
    <div className="container-fluid view-new-cases-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader
        language={reduxLanguage}
        title={{
          english: "View New Cases",
          spanish: "Ver Casos Nuevos",
        }}
        includeBanner
      />

      <div className="view-new-case-wrapper padding-left-and-right">
        {pendingCases.length === 0 ? (
          <h2>
            There are currently no pending cases. You will hear an alert noise
            when one is received.
          </h2>
        ) : (
          <div className="pending-case-wrapper">
            <div className="pending-case-card-wrapper full-flex">
              <ViewCaseCard
                name={displayedCase?.name}
                phoneNumber={displayedCase?.phoneNumber}
                emailAddress={displayedCase?.emailAddress}
                preferredLanguage={displayedCase?.preferredLanguage}
                dateOfIncident={displayedCase?.dateOfIncident}
                treatmentStatus={displayedCase?.treatmentStatus}
                incidentDescription={displayedCase?.incidentDescription}
              />
            </div>

            {displayedCase && mockCaseApproval === false ? (
              <div className="pending-case-button-wrapper full-flex">
                <Button
                  buttonId="approve-pending-case"
                  text="Approve Case"
                  variant="neutral"
                  buttonSize="large"
                  onClickHandler={async () => {
                    approveCase(displayedCase._id);
                    setMockCaseApproval(true);
                  }}
                />
                <Button
                  buttonId="approve-pending-case"
                  text="Reject Case"
                  variant="error"
                  buttonSize="large"
                  onClickHandler={() => rejectCase(displayedCase._id)}
                />
              </div>
            ) : (
              <></>
            )}
            {displayedCase && mockCaseApproval === true ? (
              <div className="case-approved-message">
                <p>
                  This case has been marked as approved. Call the customer to
                  onboard them. When finished, press next case. If after
                  speaking to the customer you discover their case is not valid,
                  press Reject Case.
                </p>
              </div>
            ) : (
              <></>
            )}

            {displayedCase && mockCaseApproval === true ? (
              <div className="pending-case-button-wrapper full-flex">
                <Button
                  buttonId="approve-pending-case"
                  text="Show Next Case"
                  variant="neutral"
                  buttonSize="large"
                  onClickHandler={async () => {
                    /* approveCase(displayedCase._id)
                    setMockCaseApproval(true) */
                  }}
                />
                <Button
                  buttonId="approve-pending-case"
                  text="Reject Case"
                  variant="error"
                  buttonSize="large"
                  onClickHandler={() => rejectCase(displayedCase._id)}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default ViewNewCases;

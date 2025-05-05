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
import { generateOriginUrl } from "../../../shared/helpers/generateOriginUrl";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../../shared/constants/interfaces/SocketInterfaces";
import { CaseReturnedFromDB } from "../constants/interfaces/case";
// Constants
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const ORIGIN_URL_BASE = import.meta.env.VITE_ORIGIN_URL_BASE;
const IS_DEV = import.meta.env.VITE_IS_DEV;
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { ViewCaseCard } from "../components/page-specific/view-case/ViewCaseCard";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
// CSS
import "../css/page-specific/cases.scss";

/* 
  ! This page originally was going to play the audio file when any new case is received by the websockets.
  ! However, this is disabled without any user interaction of the page by major browsers.
  ! As a result, if there is no case to display the user has to click a button to listen for new cases
*/

/* 
  ? Need to update pendingCases array after approving or deleting a case
  ? Need to display button when no pendingCases to allow notification sound to play
*/

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
  const [websocketConnectionInitialized, setWebsocketConnectionInitialized] =
    useState(false);
  const [displayedCase, setDisplayedCase] = useState<CaseReturnedFromDB>();
  const [userAwaitingCases, setUserAwaitingCases] = useState<Boolean>(false);
  const [mockCaseApproval, setMockCaseApproval] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState<string>();

  useEffect(() => {
    const fetchPendingCases = async () => {
      try {
        if (
          websocketConnectionInitialized === false &&
          pendingCases.length === 0
        ) {
          const newData = await getPendingCases();
          if (newData?.length === 0) {
            setPendingCasesInQueue(false);
          }
          if (newData?.length !== 0) {
            updatePendingCases(newData);
          }
          updatePendingCases(newData);
        }
      } catch (error) {
        console.error("Error fetching cases data:", error);
        setFetchErrorMessage(
          "Error fetching cases data, ensure you are logged in and try refreshing the page."
        );
      }
    };

    fetchPendingCases();
  }, [pendingCases]);

  useEffect(() => {
    if (pendingCases.length !== 0 && userAwaitingCases === true) {
      setDisplayedCase(pendingCases[0]);
      const notifaction_sound = new Audio(
        "src/assets/audio/notifaction_sound.mp3"
      );
      notifaction_sound.play();
    }
  }, [pendingCases, userAwaitingCases]);

  useEffect(() => {
    const socketServerURL = generateOriginUrl(
      ORIGIN_URL_BASE,
      BACKEND_PORT,
      IS_DEV
    );
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
      io(socketServerURL);

    socket.on("connect", () => {
      setWebsocketConnectionInitialized(true);
      console.log("Connected to the server");
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    socket.on("caseReceived", (data: CaseReturnedFromDB) => {
      setDisplayedCase(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
        {pendingCases.length === 0 && !displayedCase ? (
          fetchErrorMessage !== undefined ? (
            <div className="failed-to-fetch-warning">
              <h2>
                <FontAwesomeIcon icon={faWarning} /> {fetchErrorMessage}
              </h2>
            </div>
          ) : (
            <h2>
              There are currently no pending cases. You will hear an alert noise
              when one is received.
            </h2>
          )
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

export default ViewNewCases;

// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import { HomePage } from "./pages/HomePage";
// CSS
import "./css/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

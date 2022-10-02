import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import JobsPage from "./pages/jobs_page";
import FaqsPage from "./pages/faqs_page";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />} />
          <Route
            path={process.env.PUBLIC_URL + "/jobs"}
            element={<JobsPage />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/faqs"}
            element={<FaqsPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

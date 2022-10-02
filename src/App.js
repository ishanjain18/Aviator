import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/admin"} element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

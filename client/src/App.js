import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import HM from "./pages/HM";
import RC from "./pages/RC";
import HMRent from "./pages/HMRent";
import "rsuite/dist/rsuite.min.css";
import Navigation from "./components/Navigation";
import "./App.css";
import RCRent from "./pages/RCRent";
import ReportPage from "./pages/ReportPage";

function App() {
  const [active, setActive] = useState("home");
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation appearance="subtle" active={active} onSelect={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hm" element={<HM />} />
          <Route path="/hmrent" element={<HMRent />} />
          <Route path="/rc" element={<RC />} />
          <Route path="rcrent" element={<RCRent />} />
          <Route path="report" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

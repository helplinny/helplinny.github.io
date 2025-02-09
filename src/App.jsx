import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import OptionPage from "./components/OptionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/option/:optionId" element={<OptionPage />} />
    </Routes>
  );
}

export default App;
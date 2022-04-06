import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

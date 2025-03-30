import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; // Import Navbar
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar component */}
      
      {/* Additional hyperlinks inside App.jsx */}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

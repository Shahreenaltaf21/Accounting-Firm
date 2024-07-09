import React from 'react';
import Login from "../Components/Login.js";
import UserDetails from "../Components/userDetails.js";
import SignUp from "../Components/Singup.js";
import "../CSS/form.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import ImageUpload from "./components/imageUpload.";

export default function Form() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (  
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="../Components/Login" element={<Login />} />
          <Route path="../Components/Signup" element={<SignUp />} />
          <Route path="../Components/UserDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}  

import express from "express";
import Login from "../Components/Login.js";
import UserDetails from "../Components/userDetails.js";
import SignUp from "../Components/Singup.js";
import "../CSS/form.css";

// const isLoggedIn = window.localStorage.getItem("loggedIn");
// element={isLoggedIn === "true" ? <UserDetails /> : <Login />}

const router = express.Router(); 
router.get("/Login", Login);
router.get("/UserDetails", UserDetails);
router.get("/SignUp", SignUp); 

export default router;

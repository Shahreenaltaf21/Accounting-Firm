import React from 'react';
import img2 from "../Asstes/image2.png"
import { GoLocation, GoSearch } from 'react-icons/go'; 
import { Link } from 'react-router-dom'; 
import {BrowserRouter as Router} from 'react-router-dom';

function NavBar() {
 
  return ( 
    <Router>
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid ">
        <a className="text-white" href="/"><img src={img2} width="50" height="50" alt="Accounting firm" className="img-fluid img-logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="  nav-item"> 
              <Link className="nav-link active text-white" aria-current="page" to="./Pages/Home">Home</Link> 
              {/* <a className="nav-link active text-white" aria-current="page" href="/Home">Home</a>  */}
            </li>
            <li className="  nav-item"> 
              <Link className="nav-link active text-white" aria-current="page" to="./Pages/About">About</Link> 
            </li>
            <li className="nav-item"> 
              <Link className="nav-link active text-white" aria-current="page" to="./Pages/Services">Services</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to=" ">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="./Pages/Contact" >Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex my-2 my-log-0" >
            <span className="justify-content-center mx-4  m-2 text-white"><GoLocation /> </span>
            <span className="justify-content-center mx-4 m-2 text-white"><GoSearch /> </span>
            <button className="btn btn-light" type="submit">Sign Up</button>
          </form>
        </div>
      </div> 
    </nav> 
    </Router>
  )
}
export default NavBar;
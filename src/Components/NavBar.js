import React from 'react';
import img2 from "../Asstes/image2.png"
import { GoLocation, GoSearch } from 'react-icons/go'; 
// import { useHistory } from 'react-router-dom';
function NavBar() {
 
  return (
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid">
        <a href="/"><img src={img2} width="30" height="24" alt="Accounting firm" className="img-fluid img-logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="  nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
            </li>
            <li className="  nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Our Mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/" >Contact Us</a>
            </li>
          </ul>
          <form className="d-flex m-2" role="search">
            <span className="justify-content-center mx-4  m-2 text-white"><GoLocation /> </span>
            <span className="justify-content-center mx-4 m-2 text-white"><GoSearch /> </span>
            <button className="btn btn-light" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;
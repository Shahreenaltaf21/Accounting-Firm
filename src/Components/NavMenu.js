import React from 'react';
// import img2 from "../Asstes/image2.png";
import logo from '../Asstes/logo.png'; 
import { NavDropdown } from 'react-bootstrap';
import { GoLocation, GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Services from '../Pages/Services';
// import { useNavigate} from 'react-router-dom'; 

export default function NavMenu() {
    // const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    // const open = url => {
    //     window.open(url, ' ' );
    //     window.open(url, '_blank', 'noopener,noreferrer');
    //   };
    // const navigateToContacts = () => { 
    //     navigate('./Pages/Services');
    //   };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="50" height="50" alt="Accounting firm" className="img-fluid img-logo" />
                </Link>
                <span className='text-white display-col txt' style={{
                    fontSize: "30px", 
                    width:"100px", 
                    lineHeight:'20px', 
                    height:'30px', 
                    display: "-webkit-box",  WebkitLinClamp: '2',  /* number of lines to show */
           lineClamp: '2' , WebkitBoxOrient: 'vertical' 
                    }}>TOT  </span> 
                <span className='text-white txt2' style={{
                    fontSize: "12px",  
                    margin:"8px 0px -25px -126px", 
                    lineHeight:'20px', 
                    display: "-webkit-box",  WebkitLinClamp: '2',  /* number of lines to show */
           lineClamp: '2' , WebkitBoxOrient: 'vertical' 
                    }}>Your Tax Specialist</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4 justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-4 mr-auto me-auto mb-2 mb-lg-0 leftul">
                        <li className="nav-item active mx-2">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link className="nav-link active text-white" aria-current="page" to="./Pages/About">About</Link>
                        </li> 
                        <li className="nav-item active mx-2">
                        {/* <Link className="nav-link active" aria-current="page" to="./Pages/Services">Services</Link> */}
                            <NavDropdown 
                            className="nav-item active mx-2 text-white"  
                            // title="Services" 
                            // onClick={navigateToContacts}
                            // onClick={() => open(Services)}
                                id="collasible-nav-dropdown"
                                show={show} 
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >   
                                <NavDropdown.Item href="#action/3.1">
                                    <Link className="nav-link active " aria-current="page" to="./Components/ResolutionHead" >Tax Resolution Services</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Link className="nav-link active " aria-current="page" to="../Pages/TaxPrepration" >Tax Preparation</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Link className="nav-link active " aria-current="page" to="./Components/TaxPlanningServices" >Tax Planning Services</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    <Link className="nav-link active " aria-current="page" to="./Components/BusinessServices" >Business Tax Services</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    <Link className="nav-link active " aria-current="page" to="./Components/NotaryServices" >Notary Services</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link className="nav-link active text-white" aria-current="page" to="./Pages/Resources" >Resources</Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link className="nav-link active text-white" aria-current="page" to="./Pages/Contact" >Contact Us</Link>
                        </li>
                        
                    </ul>
                    <form className=" form-inline d-flex mx-2 my-2 my-lg-0 rightf" >
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <span className="justify-content-center mx-4 m-2 text-white"><GoLocation /> </span>
                        <span className="justify-content-center mx-4 m-2 text-white"><GoSearch /> </span>
                        <button className="btn btn-outline-success btn-light my-2 my-sm-0" type="submit">Portal</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

import React from 'react';
import logo from '../Asstes/logo.png';
import { GoLocation, GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';
// import Dropdown from 'rsuite/Dropdown';
// import 'rsuite/dist/rsuite.min.css';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { useState } from 'react';
// import Form from '../Pages/Form';
import Login from '../Components/Login';
export default function NavMenuu() {
    // const [show, setShow] = useState(false);
    // const showDropdown = (e) => {
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="150px" height="150px" alt="Accounting firm" className="img-fluid img-logo" />
                </Link>
                <span className='text-white display-col txt' style={{
                    fontSize: "30px",
                    margin: "0px 0px 4px -30px",
                    lineHeight: '20px',
                    height: '30px',
                    display: "-webkit-box", WebkitLinClamp: '2',  /* number of lines to show */
                    lineClamp: '2', WebkitBoxOrient: 'vertical'
                }}>Tax On Track</span>
                <span className='text-white txt2' style={{
                    fontSize: "12px",
                    margin: "6px 0px -28px -160px",
                    lineHeight: '20px',
                    display: "-webkit-box", WebkitLinClamp: '2',  /* number of lines to show */
                    lineClamp: '2', WebkitBoxOrient: 'vertical'
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
                        <li className="nav-item active ">
                            <Link className="nav-link active text-white" aria-current="page" to="../Pages/Services">
                                <Dropdown 
                                    title="Services"
                                    trigger="hover"
                                >
                                    <Dropdown.Menu className="nav-link active " title="Tax Prepration" path="../Pages/TaxPrepration">
                                        <Dropdown.Item><Link className="nav-link active " aria-current="page" to="../Pages/IndividualTax">Individual Tax Service</Link></Dropdown.Item>
                                        <Dropdown.Item><Link className="nav-link active " aria-current="page" to="../Pages/BusinessTax">Business Tax Service</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                    <Dropdown.Item><Link className="nav-link active " aria-current="page" to="./Components/TaxPlanningServices" >Tax Planning Services</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="nav-link active " aria-current="page" to="./Components/ResolutionHead" >Tax Resolution Services</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="nav-link active " aria-current="page" to="./Components/AccountingService" >Accounting Services</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="nav-link active " aria-current="page" to="./Components/NotaryServices" >Notary Services</Link></Dropdown.Item>
                                </Dropdown>
                            </Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link className="nav-link active text-white" aria-current="page" to="./Pages/Resources" >Resources</Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link className="nav-link active text-white" aria-current="page" to="./Pages/Contact" >Contact Us</Link>
                        </li>

                    </ul>
                    <form className=" form-inline d-flex mx-2 my-2 my-lg-0 rightf" >
                        <span className="justify-content-center mx-4 m-2 text-white"><GoLocation /> </span>
                        <span className="justify-content-center mx-4 m-2 text-white"><GoSearch /> </span>
                        <div className='bgH'>
                            <button className="btn btn-outline-success btn-light my-2 my-sm-0" type="submit">
                                <Link className="pnl nav-link text-success" aria-current="page" to="../Components/Login" onClick={Login} >Portal</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>

        </div>
    );
}

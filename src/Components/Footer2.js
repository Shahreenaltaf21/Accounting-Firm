import React from 'react';
import logo from '../Asstes/logo.png';
import flogo8 from '../Asstes/flogo8.jpeg';
import flogo2 from '../Asstes/FLogo2.png';
import flogo3 from '../Asstes/FLogo3.png';
import flogo4 from '../Asstes/Flogo4.png';
import { AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
export default function Footer2() {
    return (
        <div>
            <footer className="bg-lightgray footer" >
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mx-auto">
                            <img className="img-fluid center img1" src={logo} alt="logo" />
                            <ul className="list-unstyled footer-list"><li>
                                <Link to="/index5"><AiOutlineMail />  taxontrackllc@gmail.com</Link></li>
                                <li><Link to="/index5"><GoLocation /> 5 Remington Avenue Selden, NY 11784</Link></li>
                                <li><Link to="/index5"><BsTelephone /> 631-710-8789</Link></li>
                            </ul>
                            {/* <p className="margin-t-10">TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes 
                            in tax planning, preparation, and resolution services for individuals, businesses, and expatriates.</p> */}
                            <ul className="list-inline social">
                                <li className="list-inline-item">
                                    <Link className="bg-twitter mr-1" to="/">
                                        <AiOutlineFacebook size={25} />
                                        {/* <i className="ti-twitter-alt"><AiOutlineFacebook size={30}/> </i> */}
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="bg-dribbble mr-1 " to="/">
                                        <AiOutlineTwitter size={25} />
                                        {/* <i className="ti-dribbble"> </i> */}
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="bg-linkedin mr-1" to="/">
                                        <AiOutlineInstagram size={25} />
                                        {/* <i className="ti-linkedin"> </i> */}
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="bg-googleplus mr-1 center" to="/">
                                        < FiYoutube size={25} />
                                        {/* <i className="ti-google"></i> */}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 mx-auto">
                            <div style={{marginBottom:"20px"}}>
                                <img className='img-fluid img2 footer-list' style={{ marginRight: "20px" }} src={flogo4} alt="" />{' '}
                                <img className='img-fluid img3 footer-list' style={{ marginRight: "20px" }} src={flogo8} alt="" />{' '}
                            </div>
                            <div>
                                <img className='img-fluid img2' style={{ marginRight: "20px" }} src={flogo2} alt="" />
                                <img className='img-fluid img3' style={{ marginRight: "20px" }} src={flogo3} alt="" /> {' '}
                            </div>
                            {/* <h5>Solutions</h5>
                            <ul className="list-unstyled footer-list"><li> */}
                            {/* <a href="/index5"><AiOutlineMail />  taxontrackllc@gmail.com</a></li>
                                <li><a href="/index5"><GoLocation /> 5 Remington Avenue Selden, NY 11784</a></li>
                                <li><a href="/index5"><BsTelephone /> 631-710-8789</a></li> */}
                            {/* <li><a href="/index5">Solar Power</a></li> */}
                            {/* <li><a href="/index5">Green energy</a></li> */}
                            {/* </ul> */}
                        </div>
                        {/* <div className="col-sm-6 col-md-5 mx-auto"> 
                            <img className='img1' src={flogo3} alt="" />
                            <img className='img1' src={flogo4} alt="" />  */}
                        {/* <h5>Useful Links</h5>
                            <ul className="list-unstyled footer-list"><li>
                                <a href="/index5">About Us</a></li>
                                <li><a href="/index5">Help &amp; Support</a>
                                </li><li><a href="/index5">Privacy Policy</a></li>
                                <li><a href="/index5">Terms &amp; Conditions</a></li>
                                <li><a href="/index5">FAQ</a></li>
                            </ul> */}
                        {/* </div> */}
                        <br />
                        <div className="bg-lightgray footer-alt mt-2">
                            <hr />
                            <p className="copy-rights text-dark"> 2020 ©  Ozone Networks, Inc</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

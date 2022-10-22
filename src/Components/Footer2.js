import React from 'react';
import logo from '../Asstes/logo.png';
import { AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiYoutube } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
export default function Footer2() {
    return (
        <div>
            <footer className="bg-lightgray footer" >
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mx-auto">
                            <img src={logo} alt="logo" className='img1' />
                            <p className="margin-t-10">TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes 
                            in tax planning, preparation, and resolution services for individuals, businesses, and expatriates.</p>
                            <ul className="list-inline social">
                                <li className="list-inline-item">
                                    <a className="bg-twitter mr-1" href="/">
                                        <AiOutlineFacebook size={25} />
                                        {/* <i className="ti-twitter-alt"><AiOutlineFacebook size={30}/> </i> */}
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="bg-dribbble mr-1 " href="/">
                                        <AiOutlineTwitter size={25} />
                                        {/* <i className="ti-dribbble"> </i> */}
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="bg-linkedin mr-1" href="/">
                                        <AiOutlineInstagram size={25} />
                                        {/* <i className="ti-linkedin"> </i> */}
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="bg-googleplus mr-1 center" href="/">
                                        < FiYoutube size={25} />
                                        {/* <i className="ti-google"></i> */}
                                    </a>
                                </li> 
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-4 mx-auto">
                            <h5>Solutions</h5>
                            <ul className="list-unstyled footer-list"><li>
                                <a href="/index5"><AiOutlineMail />  taxontrackllc@gmail.com</a></li>
                                <li><a href="/index5"><GoLocation /> 5 Remington Avenue Selden, NY 11784</a></li>
                                <li><a href="/index5"><BsTelephone /> 631-710-8789</a></li>
                                {/* <li><a href="/index5">Solar Power</a></li> */}
                                {/* <li><a href="/index5">Green energy</a></li> */}
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-4 mx-auto">
                            <h5>Useful Links</h5>
                            <ul className="list-unstyled footer-list"><li>
                                <a href="/index5">About Us</a></li>
                                <li><a href="/index5">Help &amp; Support</a>
                                </li><li><a href="/index5">Privacy Policy</a></li>
                                <li><a href="/index5">Terms &amp; Conditions</a></li>
                                <li><a href="/index5">FAQ</a></li>
                            </ul>
                        </div>
                        <br/>
                        <div className="bg-lightgray footer-alt mt-2">
                            <hr/>
                        <p className="copy-rights text-dark"> 2020 ©  Ozone Networks, Inc</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

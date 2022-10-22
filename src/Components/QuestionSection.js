import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs'; 
import { GoLocation } from 'react-icons/go';
export default function QuestionSection() {
    return (
        <div>
            <section className="section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h2>Have any questions?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contact-footer row">
                        <div className="col-sm-4">
                            <div className="contact-footer-box text-center">
                                <BsTelephone size={30} className="m-2"/> 
                                {/* <i className="ti-mobile"></i> */}
                                <h5>631-710-8789</h5>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-footer-box text-center">
                                {/* <i className="ti-map-alt"></i> */}
                                <GoLocation size={30} className="m-2"/> 
                                <h5> 5 Remington Avenue Selden, NY 11784</h5>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-footer-box text-center">
                                {/* <i className="ti-email"></i> */}
                                <AiOutlineMail size={30} className="m-2"/> 
                                <h5>taxontrackllc@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Send us a message!</h4>
                            <div id="message">
                            </div>
                            <form noValidate="" action="#" name="cform" id="cform" method="get" className="contact-form margin-t-20 av-invalid">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <input name="firstname" placeholder="Your name*..." required="" id="name" type="text"
                                                className="form-control is-untouched is-pristine av-invalid form-control"   />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <input name="email" placeholder="Your email*..." required="" id="email"
                                                type="text" className="form-control is-untouched is-pristine av-invalid form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <input name="subject" placeholder="Your Subject*..." required="" id="subject"
                                                type="text" className="form-control is-untouched is-pristine av-invalid form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea name="comments" rows="4" placeholder="Your message*..."
                                                required="" id="comments"
                                                className="form-control is-untouched is-pristine av-invalid form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-left col-sm-12">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn  btn-custom" value="Send Message" />
                                    </div>
                                </div>
                                <div id="simple-msg">
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
    );
}

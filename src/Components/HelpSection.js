import React from 'react';
import styled from 'styled-components';
const HelpSectionStyle = styled.div` 
@media only screen and (max-width: 768px) {
    .title h5 {
        font-size: 28px;
    }
  }
  `;
function HelpSection() {
    return (
        <>
            <section id="service" className="section position-relative">
                <div className="container">
                    <HelpSectionStyle/>
                    <div className="justify-content-center row">
                        <div className="col-lg-7">
                            <div className="text-center title mb-4">
                                <h5 className="font-weight-bold text-uppercase text-dark">What services We provide?</h5>
                                <p className="text-muted">TOT offers a full range of tax planning services for individuals <br/> and businesses in diversified 
                                industries, whether domestic or international. <br/> We work closely with our clients throughout the year to ensure that they are in 
                                It’s our goal to help clients understand the full tax implications of their financial decisions 
                                and protect their wealth and assets by avoiding tax pitfalls in a timely manner.​</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <i className="pe-7s-exapnd2 text-purple h1 service-icon"></i>
                                <h5 className="text-dark text-center font-weight-medium service-title mb-3 mt-5">Business Services</h5>
                                <p className="text-muted mb-4 f-15">.  Our business tax services will assist you in getting set up quickly and controlling your books as we act as your extension. </p>
                                <a className="text-purple" href="/">
                                    <i className="remixicon-arrow-right-fill h4"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <i className="pe-7s-world text-purple h1 service-icon"></i>
                                <h5 className="text-dark font-weight-medium service-title mb-3 mt-5">Individual Tax Services</h5>
                                <p className="text-muted mb-4 f-15">Making the tax process easy and smooth is our goal. We offer individual tax services to resolve your personal income tax issues. </p>
                                <a className="text-purple" href="/"><i className="remixicon-arrow-right-fill h4"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <i className="pe-7s-diamond text-purple h1 service-icon">
                                </i>
                                <h5 className="text-dark font-weight-medium service-title mb-3 mt-5">Tax Resolution Services</h5>
                                <p className="text-muted mb-4 f-15">Determined to provide the help you need to be tax compliant.We assess your situation carefully and take over the burden.</p>
                                <a className="text-purple" href="/">
                                    <i className="remixicon-arrow-right-fill h4"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <i className="pe-7s-paint-bucket text-purple h1 service-icon">
                                </i>
                                <h5 className="text-dark font-weight-medium service-title mb-3 mt-5">Premium Management</h5>
                                <p className="text-muted mb-4 f-15"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Suspendisse et justo. Praesent mattis commodo augue.</p>
                                <a className="text-purple" href="/">
                                    <i className="remixicon-arrow-right-fill h4"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <i className="pe-7s-rocket text-purple h1 service-icon"></i>
                                <h5 className="text-dark font-weight-medium service-title mb-3 mt-5">FBAR Services</h5>
                                <p className="text-muted mb-4 f-15"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Suspendisse et justo. Praesent mattis commodo augue.</p>
                                <a className="text-purple" href="/"><i className="remixicon-arrow-right-fill h4"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <i className="pe-7s-graph1 text-purple h1 service-icon"></i>
                                <h5 className="text-dark font-weight-medium service-title mb-3 mt-5">Tax Preparation for Foreigners</h5>
                                <p className="text-muted mb-4 f-15"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Suspendisse et justo. Praesent mattis commodo augue.</p>
                                <a className="text-purple" href="/"><i className="remixicon-arrow-right-fill h4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <HelpSectionStyle/>
                </div>
            </section>
        </>
    );
}

export default HelpSection;
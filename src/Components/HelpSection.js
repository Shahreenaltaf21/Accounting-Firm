import React from 'react';
// import styled from 'styled-components';
import TR2 from '../Asstes/TR2.png';
import NS from '../Asstes/NS.png';
import TP from '../Asstes/TP.png';
import AS from '../Asstes/AS.png';
import IDT from '../Asstes/IDT.png';
import illu2 from '../Asstes/illu2.PNG';
const HelpSectionStyle = styled.div` 
@media only screen and (max-width: 768px) {
    .title h5 {
        font-size: 28px;
    }
  }  
  .icon img{     
    width: 80px;
    display: flex;
    justify-content: center;  
    }   
  
  `;
function HelpSection() {
    return (
        <>
            <section id="service" className="section11 position-relative">
                <div className="container">
                    <HelpSectionStyle />
                    <div className="justify-content-center row">
                        <div className="col-lg-7">
                            <div className="text-center title mb-4">
                                <h5 className="font-weight-bold text-uppercase ">How Can We Help You?</h5>
                                <p className="text-muted">
                                    TOT offers a full range of tax planning services for individuals and businesses in diversified
                                    industries, whether domestic or international. We work closely with our clients throughout the
                                    year to ensure that It’s our goal to help clients understand the full tax implications of their
                                    financial decisions and protect their wealth and assets by avoiding tax pitfalls in a timely manner.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box item mt-4 ">
                                <div className="icon center" style={{ textAlign: "center" }}>
                                    <img style={{ width: "100px" }} src={TR2} alt='' />
                                </div>
                                <h4 className="text-success text-center font-weight-medium service-title mb-3 mt-5"><b>Tax Resolution Services</b></h4>
                                <p className="text-muted mb-4 f-15" style={{paddingBottom:"18px"}}>Navigating the complex world of tax resolution with you every step of the way. Expert resolution for your tax problems.
                                </p>
                                <span style={{color:"#198754"}}>
                                    <b>Starting At 150$</b>
                                </span>
                                {/* <a className="text-purple" href="/">
                                    <i className="remixicon-arrow-right-fill h4"></i></a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box item mt-4">
                                <div className="icon center" style={{ textAlign: "center" }}>
                                    <img style={{ width: "100px" }} src={TP} alt='' />
                                </div>
                                <h4 className="text-success text-center font-weight-medium service-title mb-3 mt-5"><b>Tax Planning Services</b></h4>
                                <p className="text-muted mb-4 f-15">Get personalized tax planning services from our experienced accounting firm. Let us help you maximize your savings and achieve your financial goals.
                                </p>
                                <span style={{color:"#198754"}}>
                                    <b>Starting At 100$</b>
                                </span>
                                {/* <a className="text-purple" href="/"><i className="remixicon-arrow-right-fill h4"></i></a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <div className="icon center" style={{ textAlign: "center" }}>
                                    <img style={{ width: "140px" }} src={illu2} alt='' />
                                </div>
                                <h4 className="text-success text-center font-weight-medium service-title mb-3 mt-5"><b>Business Tax Services</b></h4>
                                <p className="text-muted mb-4 f-15" style={{paddingBottom:"22px"}}>Expert Business Tax Preparation Services to help your business thrive.Trust Our Accredited Accountants to Get It Done Right</p>
                                <span style={{color:"#198754"}}>
                                    <b>Starting At 200$</b>
                                </span>
                                {/* <a className="text-purple" href="/">
                                    <i className="remixicon-arrow-right-fill h4"></i>
                                </a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <div className="icon center" style={{ textAlign: "center" }}>
                                    <img style={{ width: "100px" }} src={AS} alt='' />
                                </div>
                                <h4 className="text-success text-center font-weight-medium service-title mb-3 mt-5"><b>Accounting Services</b></h4>
                                <p className="text-muted mb-4 f-15">Streamlining your accounting needs for maximum efficiency. Expert bookkeeping, payroll and sales tax services for your peace of mind.
                                </p>
                                <span style={{color:"#198754"}}>
                                    <b>Starting At 100$</b>
                                </span>
                                {/* <a className="text-purple" href="/">
                                    <i className="remixicon-arrow-right-fill h4"></i>
                                </a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                <div className="icon center" style={{ textAlign: "center" }}>
                                    <img style={{ width: "110px" }} src={IDT} alt='' />
                                </div>
                                <h4 className="text-success text-center font-weight-medium service-title mb-3 mt-4"><b>Individual Tax Services</b></h4>
                                <p className="text-muted mb-4 f-15">Expert tax preparation for individuals. Let us help you navigate the complex world of taxes and ensure you get the maximum refund possible
                                </p>
                                <span style={{color:"#198754"}}>
                                    <b>Starting At 100$</b>
                                </span>
                                {/* <a className="text-purple" href="/"><i className="remixicon-arrow-right-fill h4"></i></a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box mt-4">
                                {/* <i className="pe-7s-graph1 text-purple h1 service-icon"></i> */}
                                <div className="icon center" style={{ textAlign: "center" }}>
                                    <img style={{ width: "105px" }} src={NS} alt='' />
                                </div>
                                <h4 className="text-success text-center font-weight-medium service-title mb-3 mt-5"><b>Notary Services</b></h4>
                                <p className="text-muted mb-4 f-15" style={{paddingBottom:"22px"}}>Your trusted source for reliable notary services. Come to us for quick and efficient notarization that you can rely on.
                                </p>
                                <span style={{color:"#198754"}}>
                                    <b>Starting At 2$</b>
                                </span>
                                {/* <a className="text-purple" href="/"><i className="remixicon-arrow-right-fill h4"></i>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <HelpSectionStyle />
                </div>
            </section>
        </>
    );
}

export default HelpSection;
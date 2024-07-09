import React from 'react';
import styled from 'styled-components';
// import Accordion from 'react-bootstrap/Accordion';
import TP from '../Asstes/TP.png';
import { Link } from 'react-router-dom';
const BusinessTaxStyle = styled.div`
h1,
h2,
h3,
h4,
h5,
h6 {}
a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    outline: none;
}

a,
a:active,
a:focus {
    color: #198754;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
img {
max-width: 100%;
height: auto;
}
section {
    padding: 60px 0;
   /* min-height: 100vh;*/
}

.sec-title{
position:relative;
z-index: 1;
margin-bottom:60px;
}

.sec-title .title{
position: relative;
display: block;
font-size: 18px;
line-height: 24px;
color: #00aeef;
font-weight: 500;
margin-bottom: 15px;
}

.sec-title h2{
position: relative;
display: block;
font-size:40px;
line-height: 1.28em;
color: #222222;
font-weight: 600;
padding-bottom:18px;
}

.sec-title h2:before{
position:absolute;
content:'';
left:0px;
bottom:0px;
width:50px;
height:3px;
background-color:#d1d2d6;
}

.sec-title .text{
position: relative;
font-size: 16px;
line-height: 26px;
color: #848484;
font-weight: 400;
margin-top: 35px;
}

.sec-title.light h2{
color: #ffffff;
}

.sec-title.text-center h2:before{
left:50%;
margin-left: -25px;
}

.list-style-one{
position:relative;
}

.list-style-one li{
position:relative;
font-size:16px;
line-height:26px;
color: #222222;
font-weight:400;
padding-left:35px;
margin-bottom: 12px;
}

.list-style-one li:before {
content: "\f058";
position: absolute;
left: 0;
top: 0px;
display: block;
font-size: 18px;
padding: 0px;
color: #ff2222;
font-weight: 600;
-moz-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1.6;
font-family: "Font Awesome 5 Free";
}

.list-style-one li a:hover{
color: #198754;
}

.btn-style-one{
position: relative;
display: inline-block;
font-size: 17px;
line-height: 30px;
color: #ffffff;
padding: 10px 30px;
font-weight: 600;
overflow: hidden;
letter-spacing: 0.02em;
background-color: #198754;
}

.btn-style-one:hover{
background-color: #198754;
color: #ffffff;
}
.about-section{
position: relative;
padding: 120px 0 70px;
}

.about-section .sec-title{
margin-bottom: 45px;
}

.about-section .content-column{
position: relative;
margin-bottom: 50px;
}

.about-section .content-column .inner-column{
position: relative;
padding-left: 30px;
}

.about-section .text{
margin-bottom: 20px;
font-size: 16px;
line-height: 26px;
color: #848484;
font-weight: 400;
}

.about-section .list-style-one{
margin-bottom: 45px;
}

.about-section .btn-box{
position: relative;
}

.about-section .btn-box a{
padding: 15px 50px;
}

.about-section .image-column{
position: relative;
}

.about-section .image-column .text-layer{
position: absolute;
right: -110px;
top: 50%;
font-size: 325px;
line-height: 1em;
color: #ffffff;
margin-top: -175px;
font-weight: 500;
}

.about-section .image-column .inner-column{
position: relative;
padding-left: 80px;
padding-bottom: 0px;
}
.about-section .image-column .inner-column .author-desc{
position: absolute;
bottom: 16px;
z-index: 1;
background: orange;
padding: 10px 15px;
left: 96px;
width: calc(100% - 152px);
border-radius: 50px;
}
.about-section .image-column .inner-column .author-desc h2{
font-size: 21px;
letter-spacing: 1px;
text-align: center;
color: #fff;
margin: 0;
}
.about-section .image-column .inner-column .author-desc span{
font-size: 16px;
letter-spacing: 6px;
text-align: center;
color: #fff;
display: block;
font-weight: 400;
}
.about-section .image-column .inner-column:before{
content: '';
position: absolute;
width: calc(50% + 80px);
height: calc(100% + 160px);
top: -80px;
left: -3px;
background: transparent;
z-index: 0;
border: 44px solid #198754;
}

.about-section .image-column .image-1{
position: relative;
}
.about-section .image-column .image-2{
position: absolute;
left: 0;
bottom: 0;
}

.about-section .image-column .image-2 img,
.about-section .image-column .image-1 img{
box-shadow: 0 30px 50px rgba(8,13,62,.15);
border-radius: 46px;
}

.about-section .image-column .video-link{
position: absolute;
left: 70px;
top: 170px;
}

.about-section .image-column .video-link .link{
position: relative;
display: block;
font-size: 22px;
color: #191e34;
font-weight: 400;
text-align: center;
height: 100px;
width: 100px;
line-height: 100px;
background-color: #ffffff;
border-radius: 50%;
box-shadow: 0 30px 50px rgba(8,13,62,.15);
-webkit-transition: all 300ms ease;
-moz-transition: all 300ms ease;
-ms-transition: all 300ms ease;
-o-transition: all 300ms ease;
transition: all 300ms ease;
}
.list{
    width: 80%;
      margin: 1em auto;
    //   font: 1.1em/1.3 sans-serif;
  }
  .list ul, ol {
      margin-bottom: 1em;
    list-style-position: inside;
  }
  
  .list ul {
    list-style-type: none;
  }
  .list ul li {
  /*   background: url('https://treehouse-code-samples.s3.amazonaws.com/CSS-DD/codepen/stage-5/marker.png') no-repeat 0 2px; */
    list-style: square;
    padding-left: 35px;
  }
  
  .list ol {
    list-style: decimal-leading-zero outside;
  }
  
  .list li {
    margin-bottom: 0.2em;
  }
  
.about-section .image-column .video-link .link:hover{
background-color: #191e34;
color: #f
  
`;
export default function BusinessTax() {
    return (
        <div>
            <BusinessTaxStyle>
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <h2>Business Tax Services</h2>
                                        {/* <span className="title">Individual Tax Services</span> */}
                                    </div>
                                    <div className="text">
                                        Welcome to our business tax preparation services page! At our tax firm, we specialize in providing top-notch assistance to small and medium-sized businesses. Our team of experienced tax professionals is equipped with the knowledge and skills to handle a wide range of business tax returns, including C-Corporation (Form 1120), S-Corporation (Form 1120S), Partnership (Form 1065), Estates and Trusts (Form 1041), and NYS IT-204LL filing.
                                    </div>
                                    <div className="text">
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Image Column --> */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    {/* <div className="author-desc">
                                    <h2>Ayza Khan</h2>
                                    <span>Web Developer</span>
                                </div> */}
                                    <figure className="image-1">
                                        <Link to="/" className="lightbox-image" data-fancybox="images">
                                            <img style={{ width: '25rem', height: '22rem' }} title="Ayza Khan" src={TP} alt="" />
                                            {/* "https://i.ibb.co/QP6Nmpf/image-1-about.jpg" */}
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="sec-title">
                            <h2>We want to lead in innovation & Technology</h2>
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>C-Corporation (Form 1120)</h4>
                            If you own a C-Corporation, you will need to file Form 1120 to report your business income, deductions, and credits. This form is used to calculate your corporation's tax liability and report it to the IRS. Our team can help you accurately complete this form and ensure that you pay the correct amount of taxes.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>S-Corporation (Form 1120S)</h4>
                            S-Corporations are similar to C-Corporations in that they are separate legal entities from their owners. However, they are taxed differently. If you own an S-Corporation, you will need to file Form 1120S to report your business income and deductions. Our team can assist you in completing this form and ensuring that you pay the correct amount of taxes.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Partnership (Form 1065)</h4>
                            If your business is organized as a partnership, you will need to file Form 1065 to report your business income and deductions. This form is used to calculate the partnership's tax liability and report it to the IRS. Our team can help you accurately complete this form and ensure that you pay the correct amount of taxes.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Estates and Trusts (Form 1041)</h4>
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>NYS IT-204LL Filing</h4>
                            If you are the administrator of an estate or trust, you will need to file Form 1041 to report the income, deductions, and credits of the estate or trust. Our team can assist you in completing this form and ensuring that you pay the correct amount of taxes.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Partnership (Form 1065)</h4>
                            If you own a business in New York State, you may be required to file the NYS IT-204LL form. This form is used to report your business's income, deductions, and credits to the state. Our team can help you accurately complete this form and ensure that you pay the correct amount of taxes.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>1031 Exchange</h4>
                            For businesses looking to complete a 1031 exchange, we offer 1031 exchange services. A 1031 exchange, also known as a like-kind exchange, is a tax-deferred transaction in which a business can exchange one investment property for another without incurring any tax liability. If you are considering a 1031 exchange, it is important to properly plan and execute the transaction to ensure compliance with the IRS. Our team is well-versed in the specific requirements for 1031 exchanges and can help you navigate the process smoothly.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Filing Extensions </h4>
                            We offer extension filing services for all corporations. If you are unable to file your corporate taxes on time, you may be able to request an extension from the IRS. Our team can help you file for an extension and ensure that you are in compliance with all relevant tax laws.
                            <br />
                            At our tax firm, we strive to provide excellent business tax preparation services to our clients. Whether you own a C-Corporation, S-Corporation, partnership, estate, or trust, we have the expertise to handle your tax needs. Contact us today to learn more about how we can assist you with your business tax preparation needs.
                        </div>
                        {/* <div className="sec-title">
                            <h5>Credits and deductions available for US Expats </h5>
                            <div className='text'>U.S. citizens who paid or accrued foreign taxes to a foreign country or U.S. possession and are subject to U.S. income tax may be eligible for
                                either a tax credit or itemized deduction. Credits and deductions available to Expats are - </div>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Credits </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="list">
                                            <ul className='text'>
                                                <li>Foreign Tax Credit</li>
                                                <li>Earned Income Tax Credit Rules</li>
                                                <li>Education Credits</li>
                                                <li>Child and Dependent Care Credit</li> 
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>  Deductions and Exclusions</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="list">
                                            <ul className='text'>
                                                <li>Foreign Earned Income Exclusion</li>
                                                <li>Foreign Housing Exclusion</li>
                                                <li>Individual Retirement Arrangements and the Foreign Earned Income Exclusion/Deduction</li>
                                                <li>Moving Expenses to and from the United States</li> 
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Useful IRS References</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="list">
                                            <ul className='text'>
                                                <li>Choosing To Take Credit or Deduction</li>
                                                <li>Foreign Taxes that Qualify For The Foreign Tax Credit</li>
                                                <li>How To Figure The Credit</li>
                                                <li>Special Issues</li>
                                                <li>Foreign Tax Credit Compliance Tips</li>
                                                <li>U.S. Citizens and Resident Aliens Abroad</li>
                                                <li>Publication 514, Foreign Tax Credit for Individuals</li>
                                                <li>Publication 901, U.S. Tax Treaties</li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div> */}
                    </div>
                </section>
                {/* <ResolutionPricing /> */}
            </BusinessTaxStyle>
        </div>
    );
}

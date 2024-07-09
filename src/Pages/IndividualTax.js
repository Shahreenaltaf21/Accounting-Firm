import React from 'react';
import styled from 'styled-components';
// import Accordion from 'react-bootstrap/Accordion';
import TP from '../Asstes/TP.png';
import { Link } from 'react-router-dom';
const IndividualTaxStyle = styled.div`
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
export default function IndividualTax() {
    return (
        <div>
            <IndividualTaxStyle>
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <h2>Indivisual Tax Services</h2>
                                        {/* <span className="title">Individual Tax Services</span> */}
                                    </div>
                                    <div className="text">
                                        Welcome to our Individual Tax Preparation Services page! At our tax firm, we understand that navigating the world of individual tax preparation can be overwhelming and stressful. That's why we are here to help. Our team of experienced tax professionals will work with you to ensure that your individual tax return is accurate and filed in a timely manner.
                                    </div>
                                    <div className="text">
                                        When it comes to individual tax preparation, we offer a variety of services to meet your specific needs. Whether you are a sole proprietor, a real estate investor, or just need to file a prior year or amended tax return, we have the expertise to guide you through the process.
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
                            <span>We offer a range of services to meet the needs of individual taxpayers, including: </span>
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Individual Tax Preparation</h4>
                            (Single, Married, Head of Household): Whether you are single, married, or head of household, we can help you prepare your tax return and claim all the deductions and credits you are entitled to. We have experience working with a wide range of tax situations and can help you minimize your tax liability.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Married filing jointly VS. Married filing separate comparison:</h4>
                            we also offer assistance with married filing jointly versus married filing separate tax returns. Our team can help you compare the pros and cons of both options and determine which one is best for your situation.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Sole Proprietorship Tax Preparation:</h4>
                            If you are self-employed or operate a business as a sole proprietor, we can help you prepare your tax return and claim all the deductions and credits you are entitled to. We have experience working with a wide range of business types and can help you maximize your tax savings.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Real Estate Rental Tax Preparation:</h4>
                            If you own rental property, we can help you prepare your tax return and claim all the deductions and credits you are entitled to. This includes expenses such as mortgage interest, property taxes, insurance, and repairs. We can also help you navigate the complex rules surrounding passive income and loss carryovers.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Prior Year Tax Preparation:</h4>
                            If you need to file a tax return for a prior year, we can help you gather all the necessary documentation and prepare your return. We can also help you claim any missed deductions or credits and minimize any penalties or interest you may owe.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Amended Tax Return Preparation:</h4>
                            If you need to make changes to a previously filed tax return, we can help you prepare and file an amended return. This includes correcting mistakes or omissions and claiming missed deductions or credits.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>1031 Exchange</h4>
                            For businesses looking to complete a 1031 exchange, we offer 1031 exchange services. A 1031 exchange, also known as a like-kind exchange, is a tax-deferred transaction in which a business can exchange one investment property for another without incurring any tax liability. If you are considering a 1031 exchange, it is important to properly plan and execute the transaction to ensure compliance with the IRS. Our team is well-versed in the specific requirements for 1031 exchanges and can help you navigate the process smoothly.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Student's Tax Preparation:</h4>
                            If you are a student, we can help you prepare your tax return and claim all the deductions and credits you are entitled to. This includes education credits and deductions for tuition, fees, and other education-related expenses.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Filing New York State LLC filing fee payment form (IT-204-LL):</h4>
                            For those looking to form a limited liability company (LLC) in the state of New York, we can assist with filing the necessary IT-204-LL form and paying the required fee.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Farming (Schedule F):</h4>
                            For farmers, we offer Schedule F tax preparation services. This form is used to report farm income and expenses, and our team has the knowledge and expertise to help you accurately prepare and file this form.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>Expats Tax Return (Citizens Living Abroad):</h4>
                            If you are a U.S. citizen living abroad, we can help you prepare your expat tax return and ensure you are complying with all necessary reporting requirements.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>FBAR Filing (Report of Foreign Bank and Financial Accounts):</h4>
                            If you have foreign bank accounts or financial assets, we can assist with the preparation and filing of the FBAR form, which is required by the U.S. government.
                        </div>
                        <div className="text">
                            <h4 style={{ color: '#198754' }}>FATCA Reporting: </h4>
                            If you have foreign financial assets, we can help you comply with the Foreign Account Tax Compliance Act (FATCA) by reporting those assets on your tax return.
                        </div>
                        <div className="text">
                            No matter what your tax situation is, we are here to help you navigate the complex tax system and maximize your tax savings. Contact us today to schedule a consultation and learn more about our individual tax preparation services.
                        </div>
                         
                    </div>
                </section>
                {/* <ResolutionPricing /> */}
            </IndividualTaxStyle>
        </div>
    );
}

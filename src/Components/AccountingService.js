import React from 'react';
// import styled from 'styled-components';
import AST from '../Asstes/AST.jpg';
import { Link } from 'react-router-dom';
// import ResolutionPricing from './ResolutionPricing';
const AccountingServiceStyle = styled.div`
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

.about-section .image-column .video-link .link:hover{
background-color: #191e34;
color: #f
  
`;
export default function AccountingService() {
    return (
        <AccountingServiceStyle>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Accounting Services</h2>
                                </div>
                                <div className="text">
                                </div>
                                <div className="text">
                                    Welcome to our accounting services page! We are a tax firm that specializes
                                    in providing comprehensive accounting services to businesses of all sizes.
                                    Our team of bookkeeping professionals are certified QuickBooks advisors, ensuring
                                    that you receive the highest quality of service and accurate financial reporting.
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
                                <figure className="image-1"><Link to="/" className="lightbox-image" data-fancybox="images">
                                    <img style={{ width: '30rem', height: '20rem' }} title="Ayza Khan" src={AST} alt="" />
                                </Link>
                                </figure>

                            </div>
                        </div>

                    </div>
                    <div className="sec-title">
                        <span className="title">We offer Accounting Services to help make life easier. </span>
                        <h2>We want to lead in innovation & Technology</h2>
                    </div> 
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Monthly/Quarterly/Yearly Reconciliations</h4>
                        One of our core services is bank account and credit card reconciliation. We understand that keeping track of all financial transactions can be overwhelming, especially for small business owners who may not have the time or resources to do it themselves. Our team can handle this task for you, ensuring that all of your accounts are reconciled and up-to-date.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Financial Reports</h4>
                        These reports provide a detailed overview of your business's financial health, including income and expenses, profits and losses, and cash flow. This information is essential for making informed business decisions and can be used to secure funding or partnerships.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Year-end writeup</h4>
                        As the end of the year approaches, it's important to make sure all of your financial records are in order. That's where our year-end writeup service comes in. We'll review and organize all of your financial documents, preparing them for tax season and ensuring that everything is ready for your tax return.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Payroll services</h4>
                        We offer payroll services to help businesses take the stress out of managing employee paychecks. This includes calculating and distributing pay, as well as handling all necessary tax withholdings and reporting.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Sales Tax filing</h4>
                        Sales tax can be a complicated and time-consuming task, but it's important to make sure it's done accurately. Our team can handle all of your sales tax needs, including filing and payment of taxes.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Business formation services</h4>
                        We offer business formation services, including the creation of LLCs and corporations. We can also assist with the process of obtaining a DBA (Doing Business As) and obtaining a business EIN (Employer Identification Number)<br />
                        Thank you for considering our accounting services. We look forward to working with you and helping your business succeed.
                    </div>
                    <div className="text">
                        <br />
                    </div>
                </div>
            </section>
        </AccountingServiceStyle>
    );
}

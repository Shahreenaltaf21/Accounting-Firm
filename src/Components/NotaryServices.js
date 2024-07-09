import React from 'react';
// import styled from 'styled-components';
import NS from '../Asstes/NS.png';
// import ResolutionPricing from './ResolutionPricing';
const NotaryServicesStyle = styled.div`
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
export { NotaryServicesStyle };
export default function NotaryServices() {
    return (
        <NotaryServicesStyle>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Notary Services</h2>
                                </div>
                                <div className="text">
                                    {/* <h4>
                                        Be Prepared for Your Notary Visit
                                    </h4> */}
                                </div>
                                <div className="text">
                                    As an accounting firm, we understand the importance of ensuring that all of your
                                    documents are properly notarized. That's why we offer notary services to our clients
                                    to help them get their documents in order and legally recognized.
                                </div>
                                <div className="text">
                                    There are a number of types of documents that may require notarization, including wills,
                                    trusts, deeds, contracts, and affidavits. These documents are often used in legal or
                                    financial transactions, and it's important to make sure that they are properly notarized to
                                    ensure their validity.
                                </div>
                                {/* <div className="btn-box">
                                    <a href="/" className="theme-btn btn-style-one" > 
                                            Contact Us 
                                    </a>
                                </div> */}
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                {/* <div className="author-desc">
                                    <h2>Ayza Khan</h2>
                                    <span>Web Developer</span>
                                </div> */}
                                <figure className="image-1"><a href="/" className="lightbox-image" data-fancybox="images">
                                    <img style={{ width: '30rem', height: '20rem' }} title="Ayza Khan" src={NS} alt="" />
                                    {/* "https://i.ibb.co/QP6Nmpf/image-1-about.jpg" */}
                                </a>
                                </figure>

                            </div>
                        </div>

                    </div>
                    <div className="sec-title">
                        <span className="title">We offer notary services to help make life easier. </span>
                        <h2>Be Prepared for Your Notary Visit</h2>
                    </div>
                    <div className="text">
                        To prepare for your notary visit, be sure to bring a valid,
                        government-issued photo ID with you. This is necessary in order to
                        verify your identity and ensure that you are the person signing the
                        document. It's also important to note that laws regarding notarization
                        can vary by state, and some documents may require witnesses in addition
                        to the notarization. Our notary publics are trained to handle these requirements,
                        but in some cases, additional signature witnessing services may not be available.
                    </div>
                    <div className='text'>
                        At our tax firm, we strive to provide comprehensive notary services to our clients.
                        Whether you need a will, trust, deed, contract, or affidavit notarized, we are here to help.
                        Contact us today to schedule your notary visit and get your documents in order.
                    </div>
                    {/* <div className="text">
                         
                    </div>
                    <div className="text">
                         
                    </div>
                    <div className="text">
                        
                    </div>
                     */}
                    <div className="text">
                        <br />
                    </div>
                </div>
            </section>
            {/* <ResolutionPricing /> */}
        </NotaryServicesStyle>
    );
}

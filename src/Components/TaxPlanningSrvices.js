import React from 'react';
import styled from 'styled-components';
import illu3 from '../Asstes/illu3.PNG';
import ResolutionPricing from './ResolutionPricing';
const TaxPlanningSrvicesStyle = styled.div`
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

export default function TaxPlanningSrvices() {
    return (
        <TaxPlanningSrvicesStyle>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Tax Planning Services</h2>
                                </div>
                                <div className="text">TOT offers a full range of tax planning services for individuals and businesses 
                                in diversified industries, whether domestic or international.  We work closely with our clients throughout
                                 the year to ensure that they are in compliance with tax planning rules and regulations that are constantly 
                                 evolving at the Federal, State, and local tax level.  It’s our goal to help clients understand the full tax 
                                 implications of their financial decisions and protect their wealth and assets by avoiding tax pitfalls in a timely manner.  
                                </div>
                                <div className="text">
                                Tax planning is when you consult with a tax professional to devise plans for managing your money with respect 
                                to tax obligations. These plans are often short-term, for immediate usage or a year-long strategy to incorporate
                                 over the ensuing tax year. <br />
                                 Many individuals and business owners make tax planning appointments once or twice a year for advice on navigating 
                                 federal, state, and local tax law changes then executing the tax professional’s plan.
                                     
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
                                    <img title="Rahul Kumar Yadav" src={illu3} alt="" />
                                    {/* "https://i.ibb.co/QP6Nmpf/image-1-about.jpg" */}
                                </a>
                                </figure>

                            </div>
                        </div>

                    </div>
                    <div className="sec-title">
                        <span className="title">Our Future Goal</span>
                        <h2>We want to lead in innovation & Technology</h2>
                    </div>
                    <div className="text">
                    If you are a Sole Proprietor or a single member LLC, you can deduct all ordinary and necessary expenses.
                     (An ordinary expense is one that is common and accepted in your industry. A necessary expense is one that is helpful 
                    and appropriate for your trade or business. An expense does not have to be indispensable to be considered necessary)
                    </div>
                    <div className="text">
                    If you are a business owners often must factor tax provisions into starting up, winding down, expansion, transferring ownership, 
                    relocating, and day-to-day operations. In addition to federal, state, and local tax law considerations, business owners 
                    may be unsure which tax benefits are available to them based on parameters like size and industry. Tax planning services for
                     these aspects can save business owners vast amounts of money, 
                    as well as improve their recordkeeping systems for particularly valuable tax credits.
                    </div>
                    <div className="text">
                    Taxpayers with substantial holdings often need additional tax planning strategy 
                    sessions for planning their capital gain–or loss–timing. An asset that has significantly appreciated in value can provide wealth,
                     but properly planning for the tax consequences of cashing it out can ensure you get to keep more of the wealth.
                    </div>
                    <div className="text">
                    Tax credits are a dollar-for-dollar reduction of your tax bill, which often makes them more beneficial than tax deductions. However, 
                    eligibility for tax credits depends on several factors, and whether the credit is refundable or non-refundable.
                    </div>
                    <div className="text"> 
                    <br/>
                    </div>
                </div>
            </section>
            <ResolutionPricing />
        </TaxPlanningSrvicesStyle>
    );
}

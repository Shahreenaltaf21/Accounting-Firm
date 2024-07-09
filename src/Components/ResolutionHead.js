import React from 'react';
// import styled from 'styled-components';
import illus from '../Asstes/illus.PNG';
// import ResolutionPricing from './ResolutionPricing';  
const TaxServicesBgStyle = styled.div`
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

export default function ResolutionHead() {
    return (
        <TaxServicesBgStyle>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Tax Resolution Services </h2>
                                </div>
                                <div className="text">
                                    A tax resolution is the process of resolving a tax issue with the Internal Revenue Service
                                    (IRS) or state tax agency. This can include finding a way to pay off outstanding tax debts,
                                    negotiating a payment plan, or disputing the amount of tax owed. A tax resolution professional
                                    can help you explore your options and find a solution that works for your individual situation.
                                </div>
                                <div className='text'>
                                    <h3>
                                        <br />
                                    </h3>
                                </div>
                                <div className='text'>
                                    <h3>
                                        <br />
                                    </h3>
                                </div>
                                <div className='text'>
                                    <h3>
                                        <br />
                                    </h3>
                                </div>
                                {/* <div className="text">
                                    Tax resolution is the process in which tax matters are straightened out
                                    with the proper authorities and plans are accordingly made and executed. Often
                                    confused with “tax relief”, the tax resolution definition is the actual practice of
                                    solving specific tax problems. For instance, life can get in the way and cause you to fall behind on your taxes.
                                </div> */}
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
                                <figure className="image-1">
                                    <a href="/" className="lightbox-image" data-fancybox="images">
                                        <img title="Ayza Khan" src={illus} alt="" />
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
                        <h4 style={{ color: '#198754' }}>Audit Representation</h4>
                        If you receive a notice that you are being audited by the IRS, it can be a stressful and intimidating experience.
                        An experienced tax resolution professional can represent you during the audit process and ensure that your rights
                        are protected. They can also negotiate on your behalf to reduce any potential penalties or fines.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Currently Not Collectible Status (CNC) </h4>
                        If you are unable to pay your tax debt due to financial hardship, you may be able to qualify for Currently Not Collectible (CNC) status. This means that the IRS will temporarily stop collection efforts, but the debt will still be owed. A tax resolution professional can help you apply for CNC status and provide guidance on how to manage your debt during this time.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Innocent Spouse Relief </h4>
                        If you were married at the time a tax debt was incurred and did not have knowledge of the wrongdoing that led to the debt, you may be able to claim innocent spouse relief. This can protect you from being held responsible for your spouse's tax debt. A tax resolution professional can help you understand your options and guide you through the process of claiming innocent spouse relief.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Injured Spouse Relief</h4>
                        If you are married and you filed a joint tax return, but your spouse's debt is causing your refund to be applied to the debt, you may be able to claim injured spouse relief. This can protect your share of the refund and ensure that you receive your portion. A tax resolution professional can help you understand your options and guide you through the process of claiming injured spouse relief.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Installment Plans </h4>
                        If you are unable to pay your tax debt in full, you may be able to set up an installment plan with the IRS. This allows you to make monthly payments towards your debt. A tax resolution professional can help you explore your options and negotiate an installment plan that works for your individual situation.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Levy Release</h4>
                        If the IRS has placed a levy on your assets, such as your wages or bank account, a tax resolution professional can help you negotiate a release of the levy. They can also help you explore other options for paying off your debt and avoiding future levies.
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Offer in Compromise</h4>
                        An Offer in Compromise (OIC) is a settlement offer that allows you to pay less than the full amount of your tax debt. The IRS will consider an OIC if you cannot pay your debt in full, and it is unlikely that you will be able to pay it off in the future. A tax resolution professional can help you determine if you are eligible for an OIC and guide you through the process of making an offer. 
                    </div>  
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Unfiled Tax Returns</h4>
                        If you have missed filing tax returns in the past, it is important to catch up as soon as possible. Not only can you face penalties and interest for late filing, but you may also be unable to claim certain credits or deductions. A tax resolution professional can help you gather the necessary documentation and file your returns accurately and on time.  
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>Penalty abatement</h4>
                        We also offer assistance with penalty abatement. If you have received penalties for late filing or payment of taxes, we can help you request a reduction or removal of those penalties.   
                    </div>
                    <div className="text">
                        <h4 style={{ color: '#198754' }}>IRS and State notice response services</h4>
                        If you have received a notice from the IRS or state tax agency, our team can help you understand what it means and take the appropriate steps to resolve the issue.<br/>
                        If you are struggling with tax issues, don't hesitate to reach out to our team. We are here to help you find a resolution and put your tax problems behind you. 
                    </div>  
                </div>
            </section>
            {/* <ResolutionPricing /> */}
        </TaxServicesBgStyle>
    );
}

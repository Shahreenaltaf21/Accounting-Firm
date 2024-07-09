import React from 'react';
// import styled from 'styled-components';
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
                                <div className="text">
                                    Tax planning is the process of organizing your financial affairs in a way that minimizes
                                    your tax liability. It involves understanding the various tax laws and regulations that
                                    apply to your situation and taking advantage of any deductions, credits, and other
                                    tax-saving opportunities that are available.
                                </div>
                                <div className="text">
                                    At TaxOnTrack, we provide comprehensive tax planning services to help individuals, small businesses,
                                    and corporations save money on their taxes. Our team of experienced tax professionals will work
                                    with you to understand your financial goals and develop a customized plan to minimize your tax burden.
                                    <br />

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
                                    <img title="Ayza Khan" src={illu3} alt="" />
                                    {/* "https://i.ibb.co/QP6Nmpf/image-1-about.jpg" */}
                                </a>
                                </figure>

                            </div>
                        </div>

                    </div>
                    <div className="sec-title">
                        <span className="title">Our Future Goal</span>
                        <h2>
                            {/* We want to lead in innovation & Technology */}
                            Some of the tax planning services we offer include:
                        </h2>
                    </div>
                    <div className="text">
                        <ol style={{ listStyleType: 'decimal' }}>
                            <li>
                                <h4 style={{ color: "#198754 " }}> Reviewing your tax situation: </h4>
                                We will analyze your financial records and identify any tax-saving opportunities that may be available
                                to you. This may include reviewing your income, deductions, credits, and other factors that can impact
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Developing a tax strategy: </h4>
                                We will analyze your financial records and identify any tax-saving opportunities that may be available
                                to you. This may include reviewing your income, deductions, credits, and other factors that can impact
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Filing your tax return:</h4>
                                Our team will prepare and file your tax return on your behalf, ensuring that all required forms and 
                                documentation are completed accurately and in a timely manner. We will also represent you in any 
                                interactions with the Internal Revenue Service (IRS) or other tax authorities. 
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Providing ongoing support:</h4>
                                We understand that tax laws and regulations can be complex and constantly changing. That's why we offer 
                                ongoing support to our clients, providing guidance and assistance throughout the year to help them stay 
                                compliant and minimize their tax liability. 
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Maximizing deductions and credits:</h4>
                                There are many deductions and credits available that can help reduce your tax liability. We will help 
                                you identify and claim all the deductions and credits you are eligible for, to ensure you are not paying 
                                more tax than necessary.
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Tax-efficient investments:</h4>
                                The type of investments you make can have a significant impact on your tax bill. We can help you choose 
                                investments that are tax-efficient, such as municipal bonds and index funds, to help minimize your tax 
                                burden. 
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Retirement planning:</h4>
                                Proper planning for retirement can help you minimize your tax liability and maximize your retirement 
                                savings. We can help you understand the various retirement plan options available and choose the one 
                                that best suits your needs. 
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>Estate planning:</h4>
                                Estate planning involves organizing your affairs in a way that maximizes the transfer of your assets 
                                to your beneficiaries while minimizing taxes and other costs. We can help you develop an estate plan 
                                that meets your unique needs and goals. 
                            </li> 
                            <li>
                                <h4 style={{ color: "#198754 " }}>Tax Withholding Analysis:  </h4>
                                Don't overpay on your taxes! Our tax withholding analysis services ensure that you are withholding 
                                the right amount of taxes throughout the year. By accurately calculating your tax withholding, you 
                                can avoid unexpected tax bills and penalties. 
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>ESTIMATED TAX PAYMENT VOUCHERS: </h4>
                                Are you self-employed or have irregular income? Our tax professionals can help you accurately calculate 
                                and file your estimated tax payment vouchers to avoid underpayment penalties. 
                            </li> 
                            <li>
                                <h4 style={{ color: "#198754 " }}>ENTITY STRUCTURE PLANNING: </h4>
                                Choosing the right entity structure for your business is crucial for tax and liability purposes. 
                                Our tax firm offers entity structure planning services to help you determine the best structure 
                                for your business. 
                            </li>
                            <li>
                                <h4 style={{ color: "#198754 " }}>COLLEGE SAVINGS PLANNING: </h4>
                                Planning for your child's education can be overwhelming, but our tax professionals can help you 
                                navigate the various college savings options. From 529 plans to Coverdell ESAs, we can assist you 
                                in finding the best college savings plan for your family's needs.
                            </li> 
                        </ol>
                    </div>
                    <div className="text">
                        By working with our team of tax planning experts, you can be confident that you are taking all the necessary
                        steps to minimize your tax burden and achieve your financial goals. Contact us today to learn more about how
                        we can help you with your tax planning needs.
                    </div>
                    <div className="text">
                        <br />
                    </div>
                </div>
            </section>
            <ResolutionPricing />
        </TaxPlanningSrvicesStyle>
    );
}

import React from 'react';
// import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'
import Picture3 from '../Asstes/Picture3.png';
import Picture4 from '../Asstes/Picture4.png';
import Picture5 from '../Asstes/Picture5.jpg';
import pict from '../Asstes/pict.jpg';
// import styled from 'styled-components';
const NewStyle = styled.div`
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
    color: #333;
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
span, a, a:hover {
display: inline-block;
text-decoration: none;
color: inherit;
}
.section-head {
margin-bottom: 60px;
}
.section-head h4 {
position: relative;
padding:0;
color:#198754;
line-height: 1;
letter-spacing:0.3px;
font-size: 34px;
font-weight: 700;  
text-align:center;
text-transform:none;
margin-bottom:30px;
}
.section-head h4:before {
content: '';
width: 60px;
height: 3px;
background: #198754;
position: absolute;
left: 0px;
bottom: -10px;
right:0;  
margin:0 auto;
}
.section-head h4 span {
font-weight: 700;
padding-bottom: 5px;
color:#2f2f2f
}
p.service_text{
color:#cccccc !important;
font-size:16px;
line-height:28px;
text-align:center;    
}
.section-head p, p.awesome_line{
color:#818181;
font-size:16px;
line-height:28px;
text-align:center;  
}

.extra-text {
font-size:34px;
font-weight: 700;
color:#2f2f2f;
margin-bottom: 25px;
position:relative;
text-transform: none;
}
.extra-text::before {
content: '';
width: 60px;
height: 3px;
background: #f91942;
position: absolute;
left: 0px;
bottom: -10px;
right: 0;
margin: 0 auto;
}
.extra-text span {
font-weight: 700;
color:#f91942;
}
.item {
background: #fff;
text-align: center;
padding: 30px 25px;
-webkit-box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);
box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);
border-radius: 20px;
border:5px solid rgba(0, 0, 0, 0.07);
margin-bottom: 30px;
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item:hover{
background:#198754;
box-shadow:0 8px 20px 0px rgba(0, 0, 0, 0.2);
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item:hover .item, .item:hover span.icon{
background:#fff;
border-radius:10px;
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item h4{
    color: #198754;
}
.item:hover h4, .item:hover p{
color:#fff;
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item .icon {
font-size: 40px;
margin-bottom:25px;
color: #f91942;   
width: 90px;
height: 90px;
line-height: 96px;
border-radius: 50px;
}
.item .feature_box_col_one{
background:rgba(247, 198, 5, 0.20);
color:#198754;
}
.item .feature_box_col_two{
background:rgba(255, 77, 28, 0.15);
color: #198754;
}
.item .feature_box_col_three{
background:rgba(0, 147, 38, 0.15);
color: #198754;
}
.item .feature_box_col_four{
background:rgba(0, 108, 255, 0.15);
color: #198754;
}
.item .feature_box_col_five{
background:rgba(146, 39, 255, 0.15);
color:#f91942
}
.item .feature_box_col_six{
background:rgba(23, 39, 246, 0.15);
color:#f91942
}
.item p{
font-size:15px;
line-height:26px;
}
// .item h6 {
// margin-bottom:20px;
// color:#2f2f2f;
// }
.mission p {
margin-bottom: 10px;
font-size: 15px;
line-height: 28px;
font-weight: 500;
}
.mission i {
display: inline-block;
width: 50px;
height: 50px;
line-height: 50px;
text-align: center;
background: #f91942;
border-radius: 50%;
color: #fff;
font-size: 25px;
}
.mission .small-text {
margin-left: 10px;
font-size: 13px;
color: #666;
}
.skills {
padding-top:0px;
}
.skills .prog-item {
margin-bottom: 25px;
}
.skills .prog-item:last-child {
margin-bottom: 0;
}
.skills .prog-item p {
font-weight: 500;
font-size: 15px;
margin-bottom: 10px;
}
.skills .prog-item .skills-progress {
width: 100%;
height: 10px;
background: #e0e0e0;
border-radius:20px;
position: relative;
}
.skills .prog-item .skills-progress span {
position: absolute;
left: 0;
top: 0;
height: 100%;
background: #f91942;
width: 10%;
border-radius: 10px;
-webkit-transition: all 1s;
transition: all 1s;
}
.skills .prog-item .skills-progress span:after {
content: attr(data-value);
position: absolute;
top: -5px;
right: 0;
font-size: 10px;
font-weight:600;    
color: #fff;
background:rgba(0, 0, 0, 0.9);
padding: 3px 7px;
border-radius: 30px;
}
`;
export default function NewChoose() {
    return (
        <NewStyle>
            <div className="feat bg-gray pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="section-head col-sm-12">
                            <h4><span>Why Choose</span> Us?</h4>
                            <p> </p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="item"> <span className="icon ">
                                {/* className=>feature_box_col_one */}
                                {/* <i className="fa fa-globe"></i> */}
                                {/* <RiNumber1/> */}
                                <img src={Picture3} alt=''/>
                                </span>
                                <h4>Guaranteed Refund</h4>
                                <p>Our services are tailored to individual needs. Take advantage of every credit and deduction available to you.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="item"> <span className="icon  ">
                                {/* <i className="fa fa-hourglass-half"></i> */}
                                {/* <RiNumber2/> */}
                                <img src={Picture4} alt=''/>
                                </span>
                                <h4>Year around service</h4>
                                <p>Our services are available throughout the year unlike other seasonal Tax-prep companies. We are <b style={{color:"#198754"}}>BBB Accredited</b>.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="item"  style={{padding:"30px 23px"}}> <span className="icon ">
                                {/* <i className="fa fa-anchor"></i> */}
                                {/* <RiNumber3/> */}
                                <img src={Picture5} alt=''/>
                                </span>
                                <h4>Experienced Tax Pros</h4>
                                <p>Our reputable tax professionals are registered to practice before the IRS and Quick Books certified.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="item"> 
                            <span className="icon"  style={{height:"110px", width:"100px"}}> 
                                <img style={{height:"80px", width:"100px"}} src={pict} alt=''/>
                                </span>
                                <h4>Transparent Pricing</h4>
                                <p>Get to know the cost of our services upfront. Our fees are competitive and transparent.</p>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
                                <h6>Business Growth</h6>
                                <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
                                <h6>Market Strategy</h6>
                                <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
                                <h6>Affordable cost</h6>
                                <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </NewStyle>
    );
}

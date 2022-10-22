import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane, FaFighterJet, FaAddressBook, FaAirbnb } from 'react-icons/fa'
import Check2 from './Check2';
const CheckStyle1 = styled.div`
h1{
    font-size:25px;
    text-align: left;
    text-transform:capitalize;
}
.service-box{
   position: relative;
   overflow: hidden;
   margin-bottom:10px;
   perspective:1000px;
   -webkit-perspective:1000px;
}
.service-icon{
   width: 100%;
   height: 220px;
   padding: 20px;
   text-align: center;
   transition: all .5s ease;
}

.service-content{
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   opacity: 0;
   width: 100%;
   height: 220px;
   padding: 20px;
   text-align: center;
   transition: all .5s ease;
   background-color: #474747;
   backface-visibility:hidden;
   transform-style: preserve-3d;
   -webkit-transform: translateY(110px) rotateX(-90deg);
   -moz-transform: translateY(110px) rotateX(-90deg);
   -ms-transform: translateY(110px) rotateX(-90deg);
   -o-transform: translateY(110px) rotateX(-90deg);
   transform: translateY(110px) rotateX(-90deg);
}
.service-box .service-icon .front-content{
   position: relative;
   top:80px;
   -webkit-transform: translateY(-50%);
   -moz-transform: translateY(-50%);
   -ms-transform: translateY(-50%);
   -o-transform: translateY(-50%);
   transform: translateY(-50%);
}

.service-box .service-icon .front-content i {
   font-size: 28px;
   color: white;
   font-weight: normal;
}

.service-box .service-icon .front-content h3 {
   font-size: 15px;
   color: #fff;
   text-align: center;
   margin-bottom: 15px;
   text-transform: uppercase;
}
.service-box .service-content h3 {
   font-size: 15px;
   font-weight: 700;
   color: #fff;
   margin-bottom:10px;
   text-transform: uppercase;
}
.service-box .service-content p {
   font-size: 13px;
   color: #b1b1b1;
   margin:0;
}
// #198754 
// .yellow{background-color: #ffc000;}
// .orange{background-color: #fc7f0c;}
// .red{background-color: #e84b3a;}
// .grey{background-color: #474747;}
.yellow{background-color: #198754 ;}
.orange{background-color: #198754 ;}
.red{background-color: #198754 ;}
.grey{background-color: #198754 ;}
.service-box:hover .service-icon{
   opacity: 0;
   -webkit-transform: translateY(-110px) rotateX(90deg);
   -moz-transform: translateY(-110px) rotateX(90deg);
   -ms-transform: translateY(-110px) rotateX(90deg);
   -o-transform: translateY(-110px) rotateX(90deg);
   transform: translateY(-110px) rotateX(90deg);
}
.service-box:hover .service-content {
   opacity: 1;
   -webkit-transform: rotateX(0);
   -moz-transform: rotateX(0);
   -ms-transform: rotateX(0);
   -o-transform: rotateX(0);
   transform: rotateX(0);
}
`;
export default function Check1() {
    return (
        <CheckStyle1>
            <div className="container">
                <h1>Resources</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6 ">
                        <div className="service-box">
                            <div className="service-icon yellow">
                                <div className="front-content">
                                    {/* <i className="fa fa-trophy"></i> */}
                                    <FaFighterJet/>
                                    <h3>How Credits and Deductions Work</h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>Credits for Individuals</h3>
                                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <div className="service-box">
                            <div className="service-icon orange">
                                <div className="front-content">
                                    {/* <i className="fa fa-anchor"></i> */}
                                    <FaPaperPlane/>
                                    <h3>Tax prep checklists </h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>Basic Info - </h3>
                                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="service-box ">
                            <div className="service-icon red">
                                <div className="front-content">
                                    {/* <i className="fa fa-trophy"></i> */}
                                    <FaAddressBook/>
                                    <h3>Tax Preparation Checklist to File Your Individual Taxes</h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>Developer</h3>
                                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="service-box">
                            <div className="service-icon grey">
                                <div className="front-content">
                                    {/* <i className="fa fa-paper-plane-o"></i> */}
                                    <FaAirbnb/>
                                    <h3> Tax Withholding Estimator</h3>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>java script</h3>
                                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Check2/>
        </CheckStyle1>
    );
}

import React from 'react';
import styled from 'styled-components';
import { FaMoneyBillAlt, FaPersonBooth} from 'react-icons/fa'
import { TbChecklist } from 'react-icons/tb';
import {SiTaxbuzz} from 'react-icons/si';
import { MdCreditScore, MdPolicy } from 'react-icons/md'

const ResourcesSectionStyle = styled.div` 
.about-section {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    position: relative;
    height: 100%;
    // background-color: #262626;
  }
  .about-section h1 {
    // color: white;
    text-align: center;
    font-size: 50px;
    position: relative;
    top: 15%;
  }
  .about-section .all-sections {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    top: 20%;
  }
  @media (max-width: 1496px) {
    .about-section .all-sections {
      flex-wrap: wrap;
    }
  }
  .about-section .all-sections .mini-section {
    // height: 350px;
    height: 50%;
    width: 50%;
  }
  .about-section .all-sections .mini-section .text-mini-section {
    position: relative;
    text-align: center;
  }
  .about-section .all-sections .mini-section .text-mini-section h1 {
    font-size: 30px; 
  }
  .about-section .all-sections .mini-section .text-mini-section p {
    // color: white;
    font-size: 16px; 
    margin-top: 30px;
  }
  .about-section .all-sections .mini-section .hexagon {
    position: relative;
    top: 5px;
    left: 50%;
    transform: translate(-50%);
    height: 157.5px;
    width: 50%;
    background-color: #198754;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
  .about-section .all-sections .mini-section .hexagon i {
    font-size: 55px;
    color: white;
    position: relative;
    justify-content: center;
    // top: 50%;
    // left: 50%;
    top: 25%;
    left: 30%;
    // transform: translate(-50%, -50%);
  }
  @media (max-width: 1496px) {
    .about-section .all-sections .mini-section {
      // width: 35%;
      width: 50%;
      margin-bottom: 50px;
    }
    .about-section .all-sections .mini-section .hexagon {
      width: 32%;
      height: 150px;
    }
  }
  @media (max-width: 1024px) {
    .about-section .all-sections .mini-section {
      width: 60%;
      margin-bottom: 50px;
    }
    .about-section .all-sections .mini-section .hexagon {
      width: 27%;
      height: 155px;
    }
  }
  @media (max-width: 920px) {
    .about-section .all-sections .mini-section .hexagon {
      width: 30%;
    }
  }
  @media (max-width: 800px) {
    .about-section .all-sections .mini-section .hexagon {
      width: 31%;
    }
  }
  @media (max-width: 730px) {
    .about-section .all-sections .mini-section .hexagon {
      width: 40%;
    }
  }
  @media (max-width: 635px) {
    .about-section .all-sections .mini-section .hexagon {
      width: 40%;
    }
  }
  @media (max-width: 550px) {
    .about-section .all-sections .mini-section .hexagon {
      width: 50%;
    }
  }
  @media (max-width: 400px) {
    .about-section .all-sections .mini-section .hexagon {
      width: 60%;
    }
  }
  .about-section .who-am-i {
    width: 100%;
    position: relative;
    top: 22%;
  }
  .about-section .who-am-i .image-me {
    height: 400px;
    width: 400px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-color: #16d7cd;
  }
  .about-section .who-am-i .all-who h1 {
    font-size: 25px;
  
    margin-top: 20px;
  }
  .about-section .who-am-i .all-who .div-para {
    width: 400px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  .about-section .who-am-i .all-who .div-para p {
    font-size: 16px;
  
    // color: white;
    text-align: center;
  }
  .about-section .who-am-i .all-who button {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin-top: 20px;
    height: 60px;
    width: 200px;
    border: none;
  
    font-size: 17px;
    cursor: pointer;
  }
  
  .hvr-bounce-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  
  .hvr-bounce-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #16d7cd;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  
  .hvr-bounce-to-right:hover,
  .hvr-bounce-to-right:focus,
  .hvr-bounce-to-right:active {
    // color: white;
  }
  
  .hvr-bounce-to-right:hover:before,
  .hvr-bounce-to-right:focus:before,
  .hvr-bounce-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
  
`;
export default function ResourcesSection() {
    return (
        <ResourcesSectionStyle>
            <section id="section-about" className="about-section">
                <h1>Resources</h1>
                <div className="all-sections">
                    <div data-aos="fade-right" className="mini-section">
                        <div className="hexagon">
                            <i className="fa fa-fighter-jet" aria-hidden="true">
                                <MdCreditScore/>

                            </i>
                        </div>
                        <div className="text-mini-section mt-2">
                            <h1>How Credits and Deductions Work</h1>
                            <p>
                                Fast load times and lag free interaction, my highest priority.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="mini-section">
                        <div className="hexagon">
                            <i className="fa fa-window-restore" aria-hidden="true">
                                <FaMoneyBillAlt/> 
                            </i>
                        </div>
                        <div className="text-mini-section mt-2">
                            <h1>Tax prep checklists </h1>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="mini-section">
                        <div className="hexagon">
                            <i className="fa fa-rocket" aria-hidden="true">
                                <FaPersonBooth/>
                            </i>
                        </div>
                        <div className="text-mini-section mt-2">
                            <h1>Checklist to File Your Individual Taxes</h1>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="mini-section">
                        <div className="hexagon">
                            <i className="fa fa-bolt" aria-hidden="true">
                                <TbChecklist />
                            </i>
                        </div>
                        <div className="text-mini-section mt-2">
                            <h1>Tax Withholding Estimator</h1>
                            <p>
                                Websites don't have to be static, I love making pages come to life
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="mini-section">
                        <div className="hexagon">
                            <i className="fa fa-bolt" aria-hidden="true">
                                <MdPolicy/>
                            </i>
                        </div>
                        <div className="text-mini-section mt-2">
                            <h1>Tax return status - IRS</h1>
                            <p>
                                Websites don't have to be static, I love making pages come to life
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="mini-section">
                        <div className="hexagon">
                            <i className="fa fa-bolt" aria-hidden="true">
                                <SiTaxbuzz/>
                            </i>
                        </div>
                        <div className="text-mini-section mt-2">
                            <h1>Amended tax return status -IRS</h1>
                            <p>
                                Websites don't have to be static, I love making pages come to life
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="who-am-i">
                    <div data-aos="zoom-in-up" className="image-me"></div>
                    <div className="all-who">
                        <h1 data-aos="zoom-in-down">Who am I?</h1>
                        <div className="div-para">
                            <p data-aos="zoom-in-down">
                                Hello everyone, my name is Heithem Kacem and I am a Front End
                                Developer from Tunisia, Mahdia. I am self-taught developer,
                                passionate and very fast learner. I have learned how to program
                                through various resources, currently I am learning on Freecodecamp
                                and Udacity. I am eager to learn and grow - Everyday. My ambition
                                is to make awesome websites, not just good enough.
                            </p>
                        </div> 
                    </div>
                </div> */}
            </section>
        </ResourcesSectionStyle>
    );
}

import React from 'react';
import styled from 'styled-components';
import image4 from '../Asstes/image4.jpg'

import Collapse from './Collapse';
const CardsStyle = styled.div`
// .services-style-one:before {  
//     bottom: 0;
//     content: "";
//     height: 245px;
//     left: 0;
//     position: absolute;
//     width: 100%;
// } 
.services-style-one .single-service-one {
    background-color: #fff;
    // border: 1px solid #198754;
    border-radius: 1px;
    // box-shadow: 0 15px 30px 0 hsl(0deg 100% 95% / 30%);
    box-shadow: 0 0px 8px #25940f;
    overflow: hidden;
    padding: 50px 50px 40px;
    position: relative;
    transition: all .4s ease;
    height: 400px;
}
// .services-style-one .single-service-one:before {
//     background-color: #ca00ca;
//     bottom: 25%;
//     left: 50%;
//     transform: translate(-50%,-100%);
//     transition: all .4s ease;
//     z-index: 8;
// }
// .services-style-one .single-service-one .hover-block:before {
//     background-color: #8c00ca;
//     bottom: 65%;
//     left: 50%;
//     transform: translate(-50%,-100%);
//     transition: all .4s ease;
//     z-index: 10;
// }
// .services-style-one .single-service-one .hover-block:after {
//     background-color: #ab00ca;
//     bottom: 45%;
//     left: 50%;
//     transform: translate(-50%,-100%);
//     transition: all .4s ease;
//     z-index: 9;
// }
.services-style-one .single-service-one i {
    color: #5cda6b;
    font-size: 64px;
    position: relative;
    transition: all .4s ease;
    z-index: 10;
}
.services-style-one .single-service-one h3 {
    // color: #273167;
    font-size: 22px;
    line-height: 34px;
    margin: 17px 0 35px;
    position: relative;
    transition: all .4s ease;
    z-index: 10;
}
.services-style-one .single-service-one p {
    color: #777b92;
    font-size: 18px;
    line-height: 34px;
    margin: 0 0 23px;
    position: relative;
    transition: all .4s ease;
    z-index: 10;
}
.services-style-one .single-service-one .line-block {
    background-color: #5dda6c;
    display: block;
    height: 3px;
    margin-bottom: 20px;
    position: relative;
    transition: all .4s ease;
    width: 41px;
    z-index: 10;
} 
li{
    list-style: square;
  }
  @media only screen and (max-width: 425px){ 
    .services-style-one .single-service-one {   
        padding: 22px 24px 24px;   
        height: 250px;
        margin: 10px;
    } 
    .services-style-one .single-service-one p { 
        font-size: 14px;
        line-height: 24px;
        margin: 0 0 23px;  
    }
  }
`;
export default function Cards() {
    return (
        <CardsStyle>
            <section className="top services-style-one" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-service-one">
                                <div className="hover-block">
                                </div>
                                <i className="opins-icon-smartphone"> </i>
                                <div className="line-block">
                                </div>
                                <h3>Who are we</h3>
                                <p>TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes in tax planning,
                                    preparation, and resolution services for individuals, businesses, and expatriates. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-service-one">
                                <div className="hover-block">
                                </div>
                                <i className="opins-icon-smartphone-2"></i>
                                <div className="line-block">
                                </div>
                                <h3>Our Mission </h3>
                                <p>Our mission is to assist our valued clients and people in achieving success
                                     and desired results through timely,
                                    relevant advice and services based on contemporary knowledge</p>
                                 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-service-one">
                                <div className="hover-block">
                                </div>
                                <i className="opins-icon-smartphone"> </i>
                                <div className="line-block">
                                </div>
                                <h3>What we do</h3>
                                <p>
                                We work closely with clients throughout the year & ensure that they are in compliance 
                                with tax planning and regulations that are constantly evolving at tax level. 
                                    {/* <ul>
                                        <li>
                                            Tax Preparation
                                        </li>
                                        <li>
                                            Tax Planning
                                        </li>
                                        <li>
                                            Tax Resolution
                                        </li>
                                        <li>
                                            Business Services
                                        </li>
                                        <li>
                                            Notary Services
                                        </li>
                                        <li>
                                            Notary Services
                                        </li>
                                    </ul> */}
                                </p>
                            </div>
                        </div>   
                    </div>
                </div> 
            </section>
            <div className="container d-flex p-4">
        <div className="row">
        <div className="col-sm-4 container d-flex p-4"> 
            <img src={image4} className="img-fluid" alt="img" />
          </div>
          <div className="col-sm-7 container p-4 mt-4 justify-content-center">
            <h1>Tax Planning services</h1>
            <Collapse/>
          </div>
          
        </div>
      </div>
        </CardsStyle>
    );
}

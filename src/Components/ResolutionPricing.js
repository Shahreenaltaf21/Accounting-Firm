import React from 'react';
import styled from 'styled-components';
import {FaPaperPlane, FaFighterJet, FaSpaceShuttle} from 'react-icons/fa'
const ResolutionPricingStyle = styled.div`
html, body {
    margin: 0;
    padding: 0;
    font-size: 13px;
    font-family: 'Roboto';
  }
  
  * {
    box-sizing: border-box;
  }
  
  .page {
    min-height: 70vh;
    background-color: #198754;
    position: relative;
    bottom: 7rem;
    
    &:after {
      content: '';
      width: 100%;
      height: 30%;
      position: absolute;
      top: 80%;
      background-color: #fff;
      z-index: 1;
    }
  }
  
  .pricing-container {
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translate(-50%,0);
    
    @media screen and (min-width: 768px) {
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.3);
      width: 800px;
    }
    
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    
    .plan{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      margin: 30px 0px;
      padding: 0px 20px;
      
      &:not(:last-child) {
        border-right: 1px solid rgba(0,0,0,0.1);
      }
      
      .plan-icon {
        display: flex;
        width: 100px;
        height: 100px;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10;
        font-size: 7rem;
        color: #198754;
        
        &:after {
          content: '';
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: rgba(93, 169, 254, 0.1);
          z-index: 8;
          position: absolute;
        }
      }
      
      .title {
        text-transform: uppercase;
        color: #198754;
        line-height: 4rem;
        letter-spacing: 2px;
      }
      
      .features {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        
        li {
          line-height: 1.5rem;
          width: 90%;
          padding: 5px;
          display: block;
          text-align: center;
          text-transform: uppercase;
          border-top: 1px solid rgba(0,0,0,0.1);
          font-size: 85%;
          color: #198754;
          
          &:last-child {
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
        }
      }
      
      .price {
        margin-top: 1rem;
        font-size: 2.5rem;
        line-height: 5rem;
        color:#198754;
      }
      
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.3);
        justify-content: space-between;
        padding-bottom: 2rem;
      }
    }
  }
`;
export default function ResolutionPricing() {
    return (
        <ResolutionPricingStyle>
            <div className="page">
                <div className="pricing-container d-flex"> 
                    <div className="plan " >
                        <div className="plan-icon">
                            <FaPaperPlane/>
                            {/* <i className="far fa-paper-plane"></i> */}
                        </div>
                        <div className="title">
                            PERSONAL
                        </div>
                        <ul className="features">
                            <li>Custom Domains</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                        </ul>
                        <div className="price">
                            $ 8.99
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan-icon">
                            <FaFighterJet/>
                            {/* <i className="fas fa-fighter-jet"></i> */}
                        </div>
                        <div className="title">
                            SMALL TEAMS
                        </div>
                        <ul className="features">
                            <li>Custom Domains</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                        </ul>
                        <div className="price">
                            $ 9.99
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan-icon">
                            <FaSpaceShuttle/>
                            {/* <i className="fas fa-space-shuttle"></i> */}
                        </div>
                        <div className="title">
                            ENTERPRISE
                        </div>
                        <ul className="features">
                            <li>Custom Domains</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                            <li>Sleeps after 30 mins of inactivity</li>
                        </ul>
                        <div className="price">
                            $ 10.99
                        </div>
                    </div> 
                </div>
            </div>
        </ResolutionPricingStyle>
    );
}

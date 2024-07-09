import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane, FaFighterJet, FaSpaceShuttle } from 'react-icons/fa'
const ResolutionPricingStyle = styled.div`  
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  } 
  .page {
    height: 120vh;
    // min-height: 100vh;
    background-color: #198754;
    position: relative;
    bottom: 20rem; 
    top: 1rem;
    &:after {
      content: '';
      width: 100%;
      height: 20%;
      position: absolute;
      top: 80%;
      background-color: #fff;
      z-index: 1;
      bottom: 20rem;
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
      width: 1000px;
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
        line-height: 2rem;
        letter-spacing: 3px;
        letter-spacing: 1px;
        margin-top: 30px;
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
        font-size: 2rem;
        line-height: 2rem;
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
      <div>
        <div className="page">
          <div className="pricing-container d-flex">
            <div className="plan " >
              <div className="plan-icon">
                <FaPaperPlane />
                {/* <i className="far fa-paper-plane"></i> */}
              </div>
              <div className="title">
                Tax Preparation
              </div>
              <ul className="features">
                <li>Individual Tax Preparation</li>
                <li>Sole Proprietorship Tax Preparation</li>
                <li>Real Estate rental Tax Preparation</li>
                <li>S Corporation Tax Preparation</li>
                <li>C Corporation Tax Preparation</li>
                <li>Partnership Tax Preparation</li>
                <li>Prior year Tax Preparation </li>
                <li>Amended Tax Return Preparation</li>
              </ul>
              <div className="price">
                <span style={{ fontSize: "17px" }}>Starting at  </span>$100
              </div>
            </div>

            <div className="plan">
              <div className="plan-icon">
                <FaFighterJet />
                {/* <i className="fas fa-fighter-jet"></i> */}
              </div>
              <div className="title">
                Tax Planning
              </div>
              <ul className="features">
                <li> Yearly tax planning
                </li>
                <li>Tax withholding analysis
                </li>
                <li> Estimated tax payment vouchers
                </li>
                <li>Second look review of prior year tax returns
                </li>
                <li> Business Tax Planning
                </li>
                <li>Entity Structure Planning
                </li>
                <li> Retirement Tax Planning
                </li>
                <li>College savings planning</li>

              </ul>
              <div className="price">
                <span style={{ fontSize: "17px" }}>Starting at  </span> $75
              </div>
            </div>

            <div className="plan">
              <div className="plan-icon">
                <FaSpaceShuttle />
                {/* <i className="fas fa-space-shuttle"></i> */}
              </div>
              <div className="title">
                Tax Resolution
              </div>
              <ul className="features">
                <li>IRS ‘Fresh Start’ Qualification Assistance </li>
                <li>IRS notice review and response </li>
                <li>State notice review and response </li>
                <li>Audit Representation </li>
                <li>Offer in compromise </li>
                <li>Wage Garnishment and liens </li>
                <li>Getting copies of filed Federal and State tax returns and transcripts  </li>
                <li>Preparing prior year tax returns  </li>
              </ul>
              <div className="price">
                <span style={{ fontSize: "17px" }}>Starting at  </span> $150
              </div>
            </div>

            <div className="plan">
              <div className="plan-icon">
                <FaSpaceShuttle />
                {/* <i className="fas fa-space-shuttle"></i> */}
              </div>
              <div className="title">Business Service</div>
              <ul className="features">
                <li>Bookkeeping Services  </li>
                <li>Year end writeup </li>
                <li> Financial statements preparation  </li>
                <li>Payroll and Sales tax Services </li>
                <li>LLC Formation  </li>
                <li>Corporation Formation
                </li>
                <li>Amending LLCs, Get a DBA
                </li>
                <li>Business EIN
                </li>
              </ul>
              <div className="price">
                <span style={{ fontSize: "17px" }}>Starting at  </span> $100
              </div>
            </div>

            <div className="plan">
              <div className="plan-icon">
                <FaSpaceShuttle />
                {/* <i className="fas fa-space-shuttle"></i> */}
              </div>
              <div className="title">
                Notary Services
              </div>
              <ul className="features">
                <li>Administering oaths and affirmations </li>
                <li>Taking affidavits and depositions  </li>
                <li>Certifying acknowledgments or proof
                </li>
                <li>Foreign and inland bills of exchange
                </li>
                <li>Promissory notes
                </li>
                <li>Protesting for non-payment

                </li>
                <li>Real prperty transactions
                </li>
                <li>Mortgages and powers of attorney

                </li>
              </ul>
              <div className="price">
                <span style={{ fontSize: "17px" }}>Starting at  </span> $2
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResolutionPricingStyle>
  );
}

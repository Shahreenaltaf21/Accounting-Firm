import React from 'react';
import styled from 'styled-components';
import Picture1 from '../Asstes/Picture1.png';
const HeaderStyle = styled.div`
.half-half-image-text{
    padding: 70px 0px;
    h1{
        color: #198754;
    //   color: #800000;
    margin-left: 15rem;
    } 
    h1
    .content{ 
      display:flex;
      align-items: center;
      padding: 35px 0px;
      p{
        font-size: 22px;
        text-align: center;
      }
    } 
    .imagage .img{
        width: 100%;
        height: 70%;
        display: flex;
        float: right;
        // margin: 2% 10px 10px 0px;
        border-radius: 10px;
        margin-left: 80px;
    }
  }
  @media screen and (max-width: 600px) {
    .half-half-image-text h1{
        margin-left: 168px;
    }
  }
`;

export default function Header2() {
    return (
        <HeaderStyle> 
            <div className="half-half-image-text">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1> TOT</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="content tect-center">
                                <p> 
                                TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes in tax planning, preparation, and
                            resolution services for individuals, businesses, and expatriates.
                            Additionally, we offer business operational services such as bookkeeping,
                            yearly reconciliation, sales tax, payroll services, and LLC and corporation formation.
                                </p>

                            </div>
                        </div>
                        <div className="col-12 col-lg-6 justify-content-center">
                            <div className="imgage " >
                                <img src={Picture1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </HeaderStyle >

    );
}

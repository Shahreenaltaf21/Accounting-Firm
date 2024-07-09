import React from 'react';
import styled from 'styled-components';
// import Cards from '../Components/Cards';
import NewCards from '../Components/NewCards';
const AboutStyle = styled.div`
.home-header-2 {
    padding: 50px ;
    vertical-algin: center;
    horizontal-algin: center;
} 
.home-wrapper h1 {
    line-height: 25px;
    margin-top: 30px;
    font-weight: 700;
    vertical-algin: center;
    horizontal-algin: center;
}
.home-wrapper h4 {
    line-height:20px;
    margin-top: 40px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: 500;
    vertical-algin: center;
    horizontal-algin: center;
}
.home-wrapper h6 { 
    margin-top: 50px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    vertical-algin: center;
    horizontal-algin: center;
}
.home-header-2{
    height: 60vh;
     vertical-algin: center;
    horizontal-algin: center;
} 
@media only screen and (max-width: 425px){ 
    .home-wrapper h6 {
        line-height: 14px;
        margin-top: -7px;
        margin-bottom: 63px;
        font-size: 10px;
        font-weight: 100; 
    }
}
`;
export default function About() {
    return (
        <div >
            <AboutStyle>
                <section className="home bg-pattern home-header-2" id="home" >
                    <div className="bg-overlay">
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-wrapper text-center row">
                                    <div className="offset-sm-2 col-md-8">
                                        <h1 style={{ color: "#198754" }}>About US</h1>
                                        <h4>Welcome to Tax On Track</h4>
                                        <h6>We understand that filing taxes can be a daunting task. That's why we're here to help with our tax planning services.
                                            We have experienced and capable tax professionals who can assist you with any tax problems you might be experiencing.
                                            Our tax pros are well versed in tax laws and registered to practice before the IRS. So you can rest assured that your tax situation
                                            is in good hands. Keeping your information safe is very important to us.
                                            Our tax firm in USA will take all the necessary steps to deliver premium
                                            results without compromising your trust.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AboutStyle>
            <NewCards />
            {/* <Cards />    */}
        </div>
    );
}

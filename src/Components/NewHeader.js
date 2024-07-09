import React from 'react';  
// import styled from 'styled-components';
import p01 from '../Asstes/01.jpg';
import { Link } from 'react-router-dom';   
const HeaderStyle = styled.div`
body{
    margin: 0;
 }
 *{
     box-sizing: border-box; 
 }
 .main{
     margin: 0;
     justify-content: center;
     height: 45rem;
    //  background-color: blueviolet; /* For browsers that do not support gradients */
    //  background-image: linear-gradient(170deg, blueviolet 0%, blueviolet 60%, white 60.1%);
    //  background-image: linear-gradient(170deg, #07B061 0%, #1C6442 60%, white 60.1%); 
  }
 .rightimage{
     width: 50%;
     height: 70%;
     display: flex;
     float: right;
     margin: 40px 20px 5px -4px;
 }
 .rightimage img{
    //  margin-left: 15%;
     border: 2px solid green; 
 }
 .lefttext{
     width: 40%;
     height: 70%;
     justify-content: center;
     display:flex;
     float: left ;   
     margin: 2% 0px 0px 5%;
     text-align: center;
     overflow: hidden;
 }
 .lefttext .textwrap{
    //  margin: 25% 10px 0px 0px;
    margin: 0px 0px 0px 0px; 
     width: 100%;
     justify-content: center;
     text-align: center;
 }
 .lefttext .textwrap h1{
     width: 100%;
     overflow-wrap: break-word;
     font-size: 50px;  
     padding: 20px;
     color: #198754;
     justify-content: center;
     text-align: center;
     margin: 0 ;
     line-height: 70px
 }
 .lefttext .textwrap p{
     margin: 0px 20px 60px 20px;
     font-size: 20px;
    //  font-family: 'Oswald', cursive;
     padding: 0;
    //  color: whitesmoke;
     justify-content: center;
     text-align: center;
 }
 .lefttext .textwrap button{
     font-size: 30px;
     margin-top: 10px;
     padding-left: 20px;
     padding-right: 20px;
     border: 0;
     border-radius: 5px;
    //  background-color: skyblue;
    background-color: #07B061;
    //  font-family: 'Oswald', cursive;
     justify-content: center;
     text-align: center;
 }
 .lefttext .textwrap button:hover{
    //  color: rgb(255, 12, 126);
    // color: white;
    //  background-color: #198754;
     border: 2px solid black;
 }
 #navicon{
     margin-left: 100px;
     font-size: 20px;
 }
 .aboutus .leftaboutus{
     text-align: center;
     float: left;
 }
 
 @media screen and (max-width: 470px) {
     .lefttext{ 
         width: 100%;
         margin-top: -10%;
     } 
     .lefttext .textwrap p{ 
        font-size: 17px;     
    }
    .lefttext .textwrap button{
        font-size: 25px;          
    }
        .main{
            margin: 0;
            justify-content: center;
            height: 50rem;  
        } 
        .lefttext{
            width: 100%;
            height: 55%;      
        }
        .lefttext .textwrap{
            margin: 10% 10px 0px 0px;
            width: 100%;
            justify-content: center;
            text-align: center;
        }
        .lefttext .textwrap h1{
            width: 100%;   
        }  
        .rightimage{ 
            display: none;  
        } 
 }
 
`;

export default function NewHeader( ) {  
    return (
        <HeaderStyle>
            <div className="main row d-flex">
                <div className="lefttext col-8 col-md-8 col-sm-12">
                    <div className="textwrap"> 
                        <h1>
                            TOT 
                        </h1>  
                        <p> 
                            Looking for expert tax planning, preparation, and resolution services? TaxOnTrack  (TOT) is
                            here for you. As a Long Island based accounting firm, we specialize in serving individuals,
                            businesses, and expatriates. In addition to our tax services, we also offer a range of business
                            operational services including bookkeeping, sales tax, payroll services, notary and LLC/corporation
                            formation.Contact us today to see how we can help you with all your tax and business needs.
                        </p>
                        <Link to="./Pages/About"> 
                            <button className='text-white'>More</button> 
                        </Link>
                    </div>
                </div>
                <div className="rightimage img-fluid col-4 col-md-4 col-sm-12">
                    <img src={p01} alt='' />
                </div>
            </div> 
        </HeaderStyle>

    );
}

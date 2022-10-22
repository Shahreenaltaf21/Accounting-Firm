import React from 'react';
import styled from 'styled-components';
import dsfv from '../Asstes/dsfv.png';
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
     background-color: blueviolet; /* For browsers that do not support gradients */
    //  background-image: linear-gradient(170deg, blueviolet 0%, blueviolet 60%, white 60.1%);
     background-image: linear-gradient(170deg, #07B061 0%, #1C6442 60%, white 60.1%);
 
 }
 .rightimage{
     width: 50%;
     height: 70%;
     display: flex;
     float: right;
     margin: 2% 10px 0px 0px;
 }
 .rightimage img{
     margin-left: 15%;
     border: 2px solid white;
 
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
     margin: 25% 10px 0px 0px;
     width: 100%;
     justify-content: center;
     text-align: center;
 }
 .lefttext .textwrap h1{
     width: 100%;
     overflow-wrap: break-word;
     font-size: 50px;
     font-family: 'Nosifer', cursive;
     padding: 0;
     color: white;
     justify-content: center;
     text-align: center;
     margin: 0 ;
 }
 .lefttext .textwrap p{
     margin: 0px 20px 0px 20px;
     font-size: 20px;
     font-family: 'Oswald', cursive;
     padding: 0;
     color: whitesmoke;
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
     font-family: 'Oswald', cursive;
     justify-content: center;
     text-align: center;
 }
 .lefttext .textwrap button:hover{
    //  color: rgb(255, 12, 126);
    color: white;
     background-color: #198754;
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
        .rightimage{
            width: 50%;
            height: 50%;   
        } 
        .lefttext{
            width: 100%;
            height: 55%;      
        }
        .lefttext .textwrap{
            margin: 25% 10px 0px 0px;
            width: 100%;
            justify-content: center;
            text-align: center;
        }
        .lefttext .textwrap h1{
            width: 100%;   
        } 
        .rightimage{
            width: 100%;
            height: 50%; 
            margin: 10px 0px 0px 0px;
        }
        .rightimage img{
            margin-top: 10px;
            border: none;
            margin-left: 0px;
        
        }
         
 }
 
`;

export default function NewHeader() {
    return (
        <HeaderStyle>
            <div className="main row d-flex">
                <div className="lefttext col-8 col-md-8 col-sm-12">
                    <div className="textwrap">
                        <h1>
                            TOT
                        </h1>
                        <p>
                            TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes in tax planning, preparation, and
                            resolution services for individuals, businesses, and expatriates.
                            Additionally, we offer business operational services such as bookkeeping,
                            yearly reconciliation, sales tax, payroll services, and LLC and corporation formation.
                        </p>
                        <a href="./Pages/About">
                            <button>More</button></a>
                    </div>
                </div>
                <div className="rightimage img-fluid col-4 col-md-4 col-sm-12">
                    <img src={dsfv} alt='' />
                </div>
            </div>
            {/* <div className="aboutus">
                <div className="leftaboutus"> */}
            {/* <img src="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg"/> */}
            {/* </div>
                <div className="rightaboutus"> 
                </div>
            </div> */}
        </HeaderStyle>

    );
}

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const NewContactStyle = styled.div`
*{
    margin: 0;
    padding: 0;
    font-family: "montserrat",sans-serif;
  }
  .contact-section{
    // background: url(https://res.cloudinary.com/drcrre4xg/image/upload/v1572142950/bg_k00qm0.png) no-repeat center;
    // background-size: cover;
    padding: 40px 0;
  }
  .contact-section h1{
    text-align: center;
    // color: #ddd;
  }
  .border{
    width: 100px;
    height: 10px;
    background: #198754;
    margin: 40px auto;
  }
  
  .contact-form{
    max-width: 600px;
    margin: auto;
    padding: 0 10px;
    overflow: hidden;
  }
  
  .contact-form-text{
    display: block;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
    border: 1px solid #198754;
    // background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
  }
  .contact-form-text-name{
    display: inline block;
    width: 48%;
    box-sizing: border-box;
    margin-right: 0.7rem;
    border: 1px solid #198754;
    // background: #111;
    border-radius: 10px;
    padding: 20px 18px;
    outline: none;
    color: black;
    transition: 0.5s;
  }
  .contact-form-text-border{
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: none;
    // background: #111;
    padding: 0;
    outline: none;  
  }
  .contact-form-text:focus{
    box-shadow: 0 0 7px 2px #198754;
  }
  .contact-form-text-name:focus{
    box-shadow: 0 0 7px 2px #198754;
  }
  textarea.contact-form-text{
    resize: none;
    height: 120px;
  }
  .contact-form-btn{
    float: right;
    border: 0;
    background: #198754;
    color: #fff;
    padding: 12px 50px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;
  }
  .contact-form-btn:hover{   
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
  @media screen and (max-width: 768px){
    .contact-form-text-name { 
        width: 47%;         
    }
  }
  
`;
export default function NewContact() {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [uploadFile, setUploadFile] = React.useState();
    // const [superHero, setSuperHero] = React.useState();

    const submitForm = (event) => {
        event.preventDefault();
        const dataArray = new FormData();
        // dataArray.append("superHeroName", superHero);
        dataArray.append("uploadFile", uploadFile);
        axios
            .post("api_url_here", dataArray, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((response) => {
                // successfully uploaded response
            })
            .catch((error) => {
                // error response
            });
    };

    return (
        <NewContactStyle>
            <div className="contact-section">
                <h1>Contact Us</h1>
                <div className="border"></div>
                <form className="contact-form" action="index.html" method="post" onSubmit={submitForm}>
                    {/* <div className="contact-form-text-border"> */}
                    <input type="text" className="contact-form-text-name" placeholder="Your First Name" value={fname}
                        onChange={(e) => setFName(e.target.value)} />
                    <input type="text" className="contact-form-text-name" placeholder="Your Last Name" value={lname}
                        onChange={(e) => setLName(e.target.value)} />
                    {/* </div> */}
                    {/* <input type="text" className="contact-form-text" placeholder="Your name" /> */}
                    <input type="email" className="contact-form-text" placeholder="Your email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" className="contact-form-text" placeholder="Your phone" />
                    <textarea className="contact-form-text" placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    <input type="file" className="contact-form-text" onChange={(e) => setUploadFile(e.target.files)} />
                    <input type="submit" className="contact-form-btn" value="Send" />
                </form>
            </div>
        </NewContactStyle>
    );
}

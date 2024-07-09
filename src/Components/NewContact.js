import React, { useState } from "react";
// import styled from "styled-components";
const NewContactStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: "montserrat", sans-serif;
  }
  .contact-section {
    // background: url(https://res.cloudinary.com/drcrre4xg/image/upload/v1572142950/bg_k00qm0.png) no-repeat center;
    // background-size: cover;
    padding: 40px 0;
  }
  .contact-section h1 {
    text-align: center;
    color: #198754;
  }
  // .border2{
  //   width: 200px;
  //   height: 4px;
  //   background: #198754;
  //   margin: 50px auto;
  // }
  .border {
    width: 100px;
    height: 10px;
    background: #198754;
    margin: 40px auto;
  }

  .contact-form {
    max-width: 600px;
    margin: auto;
    padding: 0 10px;
    overflow: hidden;
  }

  .contact-form-text {
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
  .contact-form-text-name {
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
  .contact-form-text-name1 {
    display: inline block;
    width: 48%;
    box-sizing: border-box;
    margin-left: 0.7rem;
    border: 1px solid #198754;
    // background: #111;
    border-radius: 10px;
    padding: 20px 18px;
    outline: none;
    color: black;
    transition: 0.5s;
  }
  .contact-form-text-border {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: none;
    // background: #111;
    padding: 0;
    outline: none;
  }
  .contact-form-text:focus {
    box-shadow: 0 0 7px 2px #198754;
  }
  .contact-form-text-name:focus {
    box-shadow: 0 0 7px 2px #198754;
  }
  textarea.contact-form-text {
    resize: none;
    height: 120px;
  }
  .contact-form-btn {
    float: right;
    border: 0;
    background: #198754;
    color: #fff;
    padding: 12px 50px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;
  }
  .contact-form-btn:hover {
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
  @media screen and (max-width: 768px) {
    .contact-form-text-name {
      width: 47%;
    }
  }
`;
export default function NewContact() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  // const [uploadFile, setUploadFile] = useState("");
  const [error, setError] = useState([]);

  const submitForm = async (event) => {
    event.preventDefault();
    // console.log("First Name: ", fname);
    // console.log("Last name: ", lname);
    // console.log("Email: ", email);
    // console.log("phone number: ", phone)
    // console.log("Message: ", message);

    //New Code
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        message,
        // uploadFile,
      }),
    });

    const { msg } = await res.json();
    console.log(msg);
    setError(msg);
    console.log(error);

    /*
    const dataArray = new FormData();
    // dataArray.append("superHeroName", superHero);
    dataArray.append("uploadFile", uploadFile);
    axios
      .post("api_URL, {
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
      */
  };

  return (
    <NewContactStyle>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="border"></div>
        <form
          className="contact-form"
          action="index.html"
          method="post"
          onSubmit={submitForm}
        >
          {/* <div className="contact-form-text-border"> */}
          <div style={{ width: "100%" }}>
            <input
              type="text"
              className="contact-form-text-name"
              placeholder="Your First Name"
              value={fname}
              onChange={(e) => setFName(e.target.value)}
            />
            <input
              type="text"
              className="contact-form-text-name1"
              placeholder="Your Last Name"
              value={lname}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
          {/* </div> */}
          {/* <input type="text" className="contact-form-text" placeholder="Your name" /> */}
          <input
            type="email"
            className="contact-form-text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="contact-form-text"
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {/* <input
            type="file"
            className="contact-form-text"
            onChange={(e) => setUploadFile(e.target.uploadFile)}
          /> */}
          <input type="submit" className="contact-form-btn" value="Send" />
        </form>
      </div>
    </NewContactStyle>
  );
}

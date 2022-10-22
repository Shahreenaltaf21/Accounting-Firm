import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }
  label {
    font-size: 1.5rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 1.5rem;
    color: black; 
    // background-color: var(--deep-dark);
    box-shadow: 0 4px 18px #25940f;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    // background-color: var(--gray-1);
    // color: var(--black);
    background-color: #198754;
    color: white;
    font-size: 1.2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 2rem;

  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
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
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div>
          <form onSubmit={submitForm}>
            {/* <input
          type="text"
          onChange={(e) => setSuperHero(e.target.value)}
          placeholder={"Superhero Name"}
        />
        <br /> */}
            <input type="file" onChange={(e) => setUploadFile(e.target.files)} />

          </form>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </>
  );
}

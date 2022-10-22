import React from 'react';
import styled from 'styled-components';
// import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
// import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle'; 

const ContactSectionStyle = styled.div`
  padding: 1rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .top{
    margin: -10px
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  // .left {
  //   width: 100%;
  //   max-width: 500px;
  // }
  // .right {
  //   max-width: 500px;
  //   width: 100%;
  //   border-radius: 12px;
    /* padding-left: 3rem; */
  // }
  .center{
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    // .right {
    //   max-width: 100%;
    // }
    // .right {
    //   padding: 4rem 2rem 2rem 2rem;
    // }
    .center{
      justify-content :center;
      algin-items: center;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      {/* <div className="container">  */}
        <SectionTitle heading="Contact" subheading="Get in Touch" />
        <div className="contactSection__wrapper center">
          {/* <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="631-710-8789" />
            <ContactInfoItem icon={<MdEmail />} text="taxontrackllc@gmail.com" />
            <ContactInfoItem text="5 Remington Avenue Selden, NY 11784" />
          </div> */}
          <div className="center">
            <ContactForm />
          </div>
        </div>
      {/* </div> */}
    </ContactSectionStyle>
  );
}

import React from "react";
import emailjs from "emailjs-com";
import {
  Inputan,
  ApartInputan,
  InputanArea,
  Buttonscv,
  Buttons,
} from "../CareerComponents/JobComponents/JobElements";
import { FaArrowRight } from "react-icons/fa";
import { ContactContent, BannerStyle, BannerContent } from "./ContactElements";

const ContactComponents = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template-contact-us",
        e.target,
        "user_GcBQRE4MNsYiRCBj6Z52d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(() => {
      alert("Data has been sent");
      props.history.push("/");
    }, 10);
  };

  return (
    <>
      <BannerStyle>
        <BannerContent>Contact Us</BannerContent>
      </BannerStyle>
      <form onSubmit={sendEmail}>
        <ContactContent>
          <Inputan type="text" placeholder="Your Name" required name="name" />
          <ApartInputan>
            <Inputan
              type="text"
              placeholder="Your Phone Number"
              required
              name="phone_number"
            />
            <Inputan
              type="email"
              placeholder="Your Email"
              required
              name="email"
            />
          </ApartInputan>
          <Inputan type="text" placeholder="Subject" required name="subject" />
          <InputanArea
            rows="20"
            required
            placeholder="Type your message"
            style={{ marginTop: "20px", padding: "16px" }}
            name="message"
          />
          <br />
          <Buttonscv>
            <Buttons type="submit">
              Send <FaArrowRight style={{ marginLeft: "8px" }} />
            </Buttons>
          </Buttonscv>
        </ContactContent>
      </form>
    </>
  );
};

export default ContactComponents;

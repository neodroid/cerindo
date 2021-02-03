import React from "react"
import {
    Inputan,
    ApartInputan,
    InputanArea,
    Buttonscv,
    Buttons
} from "../CareerComponents/JobComponents/JobElements";
import { FaArrowRight } from "react-icons/fa";
import {
    ContactContent,
    BannerStyle,
    BannerContent
} from "./ContactElements"

const ContactComponents = () =>{
    return(
        <>
        <BannerStyle>
            <BannerContent>Contact Us</BannerContent>
        </BannerStyle>
            <ContactContent>
                <Inputan
                type="text"
                placeholder="Your Name"
                required/>
                <ApartInputan>
                    <Inputan
                    type="text"
                    placeholder="Your Phone Number"
                    required/>
                    <Inputan
                    type="email"
                    placeholder="Your Email"
                    required/>
                </ApartInputan>
                <Inputan
                type="text"
                placeholder="Subject"
                required/>
                <InputanArea  
                rows="20"
                required 
                placeholder="Type your message"
                style={{marginTop:"20px",padding:"16px"}}/>
                <br/>
                <Buttonscv>
                <Buttons type="submit">Send <FaArrowRight style={{marginLeft:"8px"}}/></Buttons>
                </Buttonscv>
            </ContactContent>
        </>
    )
};

export default ContactComponents
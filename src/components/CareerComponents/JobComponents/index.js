import React, { useEffect, useState } from "react";
import { careerService } from "../../../service/Career";
import { FaAngleLeft } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

import {
  BannerStyle,
  MainCareer,
  Upsiv,
  Mail,
  ArrowLeft,
  Inputan,
  ApartInputan,
  InputanArea,
  Buttonscv,
  Buttons,
  DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  ContentDrop,
  Buttonscvs,
  Nulity,
} from "./JobElements";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const JobComponents = (props) => {
  const [career, setCareer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await careerService.getCareer();
      const data = response.data;
      setCareer(data.LowonganPekerjaan);
    };
    fetchData();
  }, []);

  const detailedJob = career.filter((data) => {
    if (data._id == props.match.params.job) {
      return data;
    }
  });

  if (detailedJob.length === 0) return null;
  const shownData = detailedJob[0].jobVacancy.filter((data) => {
    if (data.id == props.match.params.jobs) {
      return data;
    }
  })[0];

  const submit = async (e) => {
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
      props.history.push("/Career");
    }, 10);
  };

  return (
    <>
      <BannerStyle>{shownData.name}</BannerStyle>
      <MainCareer>
        <h1>Main Purpose of Position</h1>
        <p>{shownData.purpose_of_position}</p>
        <h1>Main Duties & Responsibilities</h1>
        <p>{shownData.duties_and_responsibilities}</p>
        <h1>Qualification</h1>
        <p>{shownData.qualifications}</p>
        <Upsiv>
          Please send your CV to <Mail>recruitment@cerindocorp.co.id</Mail>{" "}
          <br />
          Candidates who do not meet the criteria are expected not to submit a
          CV. Only CVs that meet the criteria will be processed further.
          Candidates who are accepted will receive an attractive remuneration
          package.
        </Upsiv>
        <ArrowLeft to="/Career">
          <FaAngleLeft />
          Back to Career
        </ArrowLeft>
        <h1>Upload CV</h1>
        <form onSubmit={submit}>
          <Inputan type="text" placeholder="Your Name" required name="name" />
          <ApartInputan>
            <Inputan
              type="number"
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
            name="message"
            placeholder="Type your message"
            style={{ marginTop: "20px", padding: "16px" }}
          />
          <br />
          <label
            for="myfile"
            style={{
              color: "#A5A3A3",
              fontSize: "14px",
              lineHeight: "30px",
              margin: "20px 0",
            }}
          >
            Upload PDF max 2 mb{" "}
          </label>
          <input type="file" id="cv" name="cv" />
          <br />
          <Buttonscv type="submit">
            <Buttons>
              Send <FaArrowRight style={{ marginLeft: "8px" }} />
            </Buttons>
          </Buttonscv>
        </form>
      </MainCareer>
    </>
  );
};

export default JobComponents;

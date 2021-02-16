import React, { useEffect, useState, useContext } from "react";
import { careerService } from "../../../service/Career";
import { FaAngleLeft } from "react-icons/fa";
import {
  JobLangDuties,
  JobLangName,
  JobLangPurpose,
  JobLangQual,
  JobLangTitle,
} from "./JobLang";

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
import { langContext } from "../../../langContext";
import { JobParams } from "../../Data/CareerData";

const JobComponents = (props) => {
  const [career, setCareer] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [cv, setCV] = useState();
  const { language } = useContext(langContext);

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
    console.log(cv);
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name,
        email,
        phone_number: phoneNumber,
        subject,
        message,
      })
    );
    formData.append("files.cv", cv, cv.name);

    const upload_res = await axios.post(
      "https://www.cerindocorp.com/api/cvs",
      formData
    );

    console.log(upload_res);
    setTimeout(() => {
      alert("Data has been sent");
      props.history.push("/Career");
    }, 20);
  };

  return (
    <>
      <BannerStyle>{JobLangName(shownData, language)}</BannerStyle>
      <MainCareer>
        <h1>{JobLangTitle(JobParams.purpose, language)}</h1>
        <p>{JobLangPurpose(shownData, language)}</p>
        <h1>{JobLangTitle(JobParams.duties, language)}</h1>
        <p>{JobLangDuties(shownData, language)}</p>
        <h1>{JobLangTitle(JobParams.qualification, language)}</h1>
        <p>{JobLangQual(shownData, language)}</p>
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
          <Inputan
            type="text"
            placeholder="Your Name"
            required
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <ApartInputan>
            <Inputan
              type="number"
              placeholder="Your Phone Number"
              required
              name="phone_number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <Inputan
              type="email"
              placeholder="Your Email"
              required
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </ApartInputan>
          <Inputan
            type="text"
            placeholder="Subject"
            required
            name="subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <InputanArea
            rows="20"
            required
            name="message"
            placeholder="Type your message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
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
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={(e) => {
              setCV(e.target.files[0]);
            }}
          />
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

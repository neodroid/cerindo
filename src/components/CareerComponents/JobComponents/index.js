import React, { useEffect, useState } from "react";
import { careerService } from "../../../service/Career";
import { FaAngleLeft } from "react-icons/fa";
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
} from "./JobElements";
import { FaArrowRight } from "react-icons/fa";

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

  console.log(shownData);
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
        <Inputan type="text" placeholder="Your Name" required />
        <ApartInputan>
          <Inputan type="text" placeholder="Your Phone Number" required />
          <Inputan type="email" placeholder="Your Email" required />
        </ApartInputan>
        <Inputan type="text" placeholder="Subject" required />
        <InputanArea
          rows="20"
          required
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
        <input type="file" id="myfile" name="myfile" />
        <br />
        <Buttonscv>
          <Buttons>
            Send <FaArrowRight style={{ marginLeft: "8px" }} />
          </Buttons>
        </Buttonscv>
      </MainCareer>
    </>
  );
};

export default JobComponents;

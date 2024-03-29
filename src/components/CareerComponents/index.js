import React, { useEffect, useState, useContext } from "react";
import { careerService } from "../../service/Career";
import { CareerJobCerData, EmployeProfileData } from "../Data/CareerData";
import { JobData } from "../Data/CareerData";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {
  CareerTempl,
  Jobcer,
  JobcerContent,
  JobcerBoard,
  JobcerImage,
  ContentDiv,
  TextButton,
  ArrowDownLang,
  ArrowDiv,
  DropDown,
  Dropbtn,
  DropDownContent,
  ArrowBg,
  ContentWrited,
  ButtonLink,
  Linkeda,
  Arrowchild,
  EmployContent,
  WritedEmploy,
  InfoRow,
  Column1,
  Column2,
  EmployImage,
  Nulity,
  Vacancybtn,
  JobLink,
} from "./CareerElements";
import { langContext } from "../../langContext";
import {
  CareerLangTitle,
  CareerLangBody,
  CareerLangEmployeeBody,
  CareerOpportunitiesTitle,
  CareerVacancies,
  CareerTitleVacancies,
  CareerTitleEmployee,
} from "./CareerLang";

const CareerComponents = () => {
  const { language } = useContext(langContext);
  const [career, setCareer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await careerService.getCareer();
      const data = response.data;
      setCareer(data);
    };
    fetchData();
  }, []);

  if (career.length === 0) return null;

  return (
    <CareerTempl>
      <Jobcer>
        <JobcerContent>
          <h2>{CareerLangTitle(career, language)}</h2>
          <JobcerBoard />
          <ReactMarkdown
            children={CareerLangBody(career, language).props.children}
            plugins={[[gfm, { singleTilde: false }]]}
            allowDangerousHtml={true}
          />
        </JobcerContent>
        <JobcerImage>
          <img src={career.Title.image.url} />
        </JobcerImage>
      </Jobcer>
      <h2>{CareerTitleVacancies(language)}</h2>
        <JobLink href="https://hr.cerindocorp.id/jobs">
          <Vacancybtn>{CareerOpportunitiesTitle(language)}</Vacancybtn>
        </JobLink>
      <div style={{ width: "100%", margin: "0 auto 52px" }}>
        {/* {career.LowonganPekerjaan.map((obj, idx) => {
          if (obj.availability > 1) {
            return (
              <DropDown role="button" tabIndex={-1} key={idx}>
                <Dropbtn>
                  <ContentDiv job>
                    <TextButton>{obj.jobType}</TextButton>
                  </ContentDiv>
                  <ContentDiv>
                    <TextButton pos>{obj.availability} Positions</TextButton>
                  </ContentDiv>
                  <ArrowDiv>
                    <ArrowBg>
                      <ArrowDownLang />
                    </ArrowBg>
                  </ArrowDiv>
                </Dropbtn>
                <DropDownContent>
                  {obj.jobVacancy.map((data) => {
                    return (
                      <Linkeda to={`Jobs/${obj._id}/${data.id}`}>
                        <ContentWrited>
                          {CareerVacancies(data, language)}
                        </ContentWrited>
                        <ButtonLink>
                          <Arrowchild />
                        </ButtonLink>
                      </Linkeda>
                    );
                  })}
                </DropDownContent>
              </DropDown>
            );
          } else {
            return (
              <DropDown role="button" tabIndex={-1} key={idx}>
                <Dropbtn>
                  <ContentDiv job>
                    <TextButton>{obj.jobType}</TextButton>
                  </ContentDiv>
                  <ContentDiv>
                    <TextButton pos>{obj.availability} Position</TextButton>
                  </ContentDiv>
                  <ArrowDiv>
                    <ArrowBg>
                      <ArrowDownLang />
                    </ArrowBg>
                  </ArrowDiv>
                </Dropbtn>
                <DropDownContent>
                  {obj.jobVacancy.map((data) => {
                    return (
                      <Linkeda to={`Jobs/${obj._id}/${data._id}`}>
                        <ContentWrited>
                          {CareerVacancies(data, language)}
                        </ContentWrited>
                        <ButtonLink>
                          <Arrowchild />
                        </ButtonLink>
                      </Linkeda>
                    );
                  })}
                </DropDownContent>
              </DropDown>
            );
          }
        })} */}
      </div>
      <h2>{CareerTitleEmployee(language)}</h2>
      <div style={{ width: "100%", margin: "0 auto 52px" }}>
        {career.EmployeeStory.map((data, idx) => {
          if (idx % 2 != 0) {
            return (
              <EmployContent key={idx}>
                <InfoRow imgStart={true}>
                  <Column1>
                    <EmployImage src={data.image.url} />
                    <WritedEmploy name>{data.name}</WritedEmploy>
                  </Column1>
                  <Column2>
                    <WritedEmploy>
                      <ReactMarkdown
                        children={
                          CareerLangEmployeeBody(data, language).props.children
                        }
                        plugins={[[gfm, { singleTilde: false }]]}
                        allowDangerousHtml={true}
                      />
                    </WritedEmploy>
                  </Column2>
                </InfoRow>
              </EmployContent>
            );
          } else {
            return (
              <EmployContent key={idx}>
                <InfoRow imgStart={false}>
                  <Column1>
                    <EmployImage src={data.image.url} />
                    <WritedEmploy name>{data.name}</WritedEmploy>
                  </Column1>
                  <Column2>
                    <WritedEmploy>
                      <ReactMarkdown
                        children={
                          CareerLangEmployeeBody(data, language).props.children
                        }
                        plugins={[[gfm, { singleTilde: false }]]}
                        allowDangerousHtml={true}
                      />
                    </WritedEmploy>
                  </Column2>
                </InfoRow>
              </EmployContent>
            );
          }
        })}
      </div>
    </CareerTempl>
  );
};

export default CareerComponents;

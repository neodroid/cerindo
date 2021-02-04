import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
<<<<<<< HEAD
import { AwardImageContent } from "../../Data/SustainabilityData/AwardDatas";
import {
  AwardsesContent,
  ContentAward,
  ImageAward,
  Linked,
} from "./AwardElements";
import { BoxContainer } from "../../CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents/NewsContentElements";
=======
import {AwardImageContent} from "../../Data/SustainabilityData/AwardDatas"
import { AwardsesContent, ContentAward, ImageAward,Linked,Containerrs } from "./AwardElements";
import {BoxContainer} from "../../CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents/NewsContentElements";
>>>>>>> 2184e2ebda8eeb450d4b14e56f1286fff6a44747
import { langContext } from "../../../langContext";
import { AwardContentLangTitle, AwardContentLangBody } from "./AwardLang";

const AwardComponents = () => {
  const { language } = useContext(langContext);
  const [AwardContent, setAwardContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.Awards;
      setAwardContent(data);
    };
    fetchData();
  }, []);

  if (AwardContent.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page4={true} />
        <AboutMain>
          <BusinessWrited title>
            {AwardContentLangTitle(AwardContent, language)}
          </BusinessWrited>
          <BusinessWrited>
            {AwardContentLangBody(AwardContent, language)}
          </BusinessWrited>
          <AwardsesContent>
            {AwardContent.awards_list.map((data, idx) => {
              return (
                <ContentAward key={idx}>
                  <BoxContainer>{data.date}</BoxContainer>
                  <Linked href={data.file.url} target="_blank">
                    <BoxContainer titlee>{data.name}</BoxContainer>
                  </Linked>
<<<<<<< HEAD
                  <embed src={data.file.url} width="300px" height="400px" />
                  {/* <ImageAward src={data.image}/> */}
                  <BoxContainer>{data.description}</BoxContainer>
=======
                  <Containerrs>
                    <ImageAward src={data.image}/>
                    <BoxContainer>{data.caption}</BoxContainer>
                  </Containerrs>
>>>>>>> 2184e2ebda8eeb450d4b14e56f1286fff6a44747
                </ContentAward>
              );
            })}
          </AwardsesContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default AwardComponents;

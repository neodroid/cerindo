import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import {AwardImageContent} from "../../Data/SustainabilityData/AwardDatas"
import { AwardsesContent, ContentAward, ImageAward,Linked } from "./AwardElements";
import {BoxContainer} from "../../CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents/NewsContentElements";
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
          <BusinessWrited title>{AwardContentLangTitle(AwardContent, language)}</BusinessWrited>
          <BusinessWrited>{AwardContentLangBody(AwardContent, language)}</BusinessWrited>
          <AwardsesContent>
            {AwardImageContent.map((data, idx) => {
              return (
                <ContentAward key={idx}>
                  <BoxContainer>{data.date}</BoxContainer>
                  <Linked href={data.link}>
                  <BoxContainer titlee>{data.title}</BoxContainer>
                  </Linked>
                  <ImageAward src={data.image}/>
                  <BoxContainer>{data.caption}</BoxContainer>
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

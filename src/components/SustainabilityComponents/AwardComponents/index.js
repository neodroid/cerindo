import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { AwardImageContent } from "../../Data/SustainabilityData/AwardDatas";
import {
  AwardsesContent,
  ContentAward,
  ImageAward,
  Linked,
  Containerrs,
} from "./AwardElements";
import { BoxContainer } from "../../CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents/NewsContentElements";
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
                  <Containerrs>
                    <ImageAward src={data.image} />
                    <BoxContainer>{data.caption}</BoxContainer>
                  </Containerrs>
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

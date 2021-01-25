import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { AwardsesContent, Figured } from "./AwardElements";
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
            {AwardContent.awards_list.map((data, idx) => {
              return (
                <Figured key={idx}>
                  <img src={data.image.url} alt={data.image} />
                  <figcaption>{data.name}</figcaption>
                </Figured>
              );
            })}
          </AwardsesContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default AwardComponents;

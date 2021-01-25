import React from "react";
import {
  BusinessWrited,
} from "../../BusinessComponents/BusinessElements";
import {AwardContent,AwardImageContent} from "../../Data/SustainabilityData/AwardDatas"
import {
  Aboutstyle,
  AboutMain,
} from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import {
    AwardsesContent,
    Figured
} from "./AwardElements"

const AwardComponents = () => {
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page4={true} />
        <AboutMain>
            <BusinessWrited title>{AwardContent.title}</BusinessWrited>
            <BusinessWrited>
              {AwardContent.content}
            </BusinessWrited>
            <AwardsesContent>
              {AwardImageContent.map((data, idx) => {
                return (
                  <Figured key={idx}>
                    <img src={data.image} alt={data.image} />
                    <figcaption>{data.caption}</figcaption>
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

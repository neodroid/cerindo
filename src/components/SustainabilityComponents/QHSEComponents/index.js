import React from "react";
import {
  BusinessWrited,
} from "../../BusinessComponents/BusinessElements";
import {
  Aboutstyle,
  AboutMain,
} from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import {QHSEContent} from "../../Data/SustainabilityData/QHSEDatas";
import {Imageqhse,Images,WritedPart} from "./QHSEElements"

const QHSEComponents = () => {
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page1={true} />
        <AboutMain>
          <Images>
            <Imageqhse src={QHSEContent.img} />
          </Images>
          <WritedPart>
            <BusinessWrited title>{QHSEContent.title}</BusinessWrited>
            <BusinessWrited>
              {QHSEContent.content}
            </BusinessWrited>
          </WritedPart>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default QHSEComponents;

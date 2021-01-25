import React from "react";
import {
  Aboutstyle,
  AboutMain,
} from "../../AboutUsComponents/AboutUsElements";
import {ReportsData,ReportImageB} from "../../Data/SustainabilityData/ReportsDatas";
import BusinessSideBarComponents from "../index";
import {
    ReportsFlex,
    ReportsContent,
    ReportWrited,
    ReportImage,
    ImageB
} from "./ReportsElements";

const ReportsComponents = () => {
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page3={true} />
        <AboutMain>
            <ReportsFlex>
                <ReportsContent>
                    <ReportWrited title>{ReportsData.title}</ReportWrited>
                    <ReportWrited>{ReportsData.content}</ReportWrited>
                </ReportsContent>
                <ReportsContent>
                    <ReportImage>
                        <img src={ReportsData.img}/>
                    </ReportImage>
                </ReportsContent>
            </ReportsFlex>
            <ImageB>
                <img src={ReportImageB.image}/>
            </ImageB>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default ReportsComponents;

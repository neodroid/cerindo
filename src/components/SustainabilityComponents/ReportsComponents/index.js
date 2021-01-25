import React, { useState, useEffect } from "react";
import { sustainService } from "../../../service/Sustainability";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import {
  ReportsFlex,
  ReportsContent,
  ReportWrited,
  ReportImage,
  ImageB,
} from "./ReportsElements";

const ReportsComponents = () => {
  const [ReportsData, setReportsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.SustainibilityReports;
      setReportsData(data);
    };
    fetchData();
  }, []);

  if (ReportsData.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page3={true} />
        <AboutMain>
          <ReportsFlex>
            <ReportsContent>
              <ReportWrited title>{ReportsData.title_en}</ReportWrited>
              <ReportWrited>{ReportsData.body_en}</ReportWrited>
            </ReportsContent>
            <ReportsContent>
              <ReportImage>
                <img src={ReportsData.image.url} />
              </ReportImage>
            </ReportsContent>
          </ReportsFlex>
          {/* <ImageB>
            <img src={ReportImageB.image} />
          </ImageB> */}
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default ReportsComponents;

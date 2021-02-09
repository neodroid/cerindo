import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../service/Sustainability";
import Banner from "../components/Banner";
import ReportsComponents from "../components/SustainabilityComponents/ReportsComponents";
import { BannerSlider } from "../components/BannerSlider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { langContext } from "../langContext";
import { SustainabilityTitle } from "../components/SustainabilityComponents/SustainabilityLang";
const AutoplaySlider = withAutoplay(BannerSlider);

const Reports = () => {
  const { language } = useContext(langContext);
  const [report, setReport] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.SustainibilityReports;
      setReport(data);
    };
    fetchData();
  }, []);

  if (report.length === 0) return null;
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={5000}
        className="aws-btn"
      >
        {report.banner.map((data, idx) => {
          return (
            <>
              {" "}
              <Banner
                img={data.url}
                texted={true}
                key={idx}
                place={SustainabilityTitle(language)}
              />
            </>
          );
        })}
      </AutoplaySlider>
      <ReportsComponents />
    </>
  );
};

export default Reports;

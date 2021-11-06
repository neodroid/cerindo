import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { PowerPlantContent } from "../../Data/BusinessData/PowerPlantDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  PowerPlantLangBody,
  PowerPlantLangTitle,
  PowerPlantLangBody2,
} from "./PowerPlantLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const PowerPlantComponents = () => {
  const { language } = useContext(langContext);
  const [powerPlant, setPowerPlant] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "618381e74161220b3a25ea81"
      );
      const data = response.data;
      setPowerPlant(data);
    };
    fetchData();
  }, []);
  if (powerPlant.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page6={true} />
        <AboutMain>
          <BusinessWrited title>
            {PowerPlantLangTitle(powerPlant, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={PowerPlantLangBody(powerPlant, language).props.children}
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>

          <BusinessWrited>
            <ReactMarkdown
              children={
                PowerPlantLangBody2(powerPlant, language).props.children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default PowerPlantComponents;

import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { FerronickleSmeltingContent } from "../../Data/BusinessData/FerronickleSmeltingDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  FerronickleLangTitle,
  FerronickleLangBody,
  FerronickleLangBody2,
} from "./FerronickleSmeltingLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
const FerronickleSmeltingComponents = () => {
  const { language } = useContext(langContext);
  const [ferronicle, setFerronicle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43b56b545d223a4997ccd"
      );
      const data = response.data;
      setFerronicle(data);
    };
    fetchData();
  }, []);
  if (ferronicle.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page2={true} />
        <AboutMain>
          <BusinessWrited title>
            {FerronickleLangTitle(ferronicle, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                FerronickleLangBody(ferronicle, language).props.children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>

          <BusinessWrited>
            <ReactMarkdown
              children={
                FerronickleLangBody2(ferronicle, language).props.children
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
export default FerronickleSmeltingComponents;

import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { HPALContent } from "../../Data/BusinessData/HPALDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  NickleCobaltLangBody,
  NickleCobaltLangTitle,
  NickleCobaltLangBody2,
} from "./NickleCobaltHPALLang";
import ReactMarkdown from "react-markdown";

const NickelCobaltHPALComponents = () => {
  const { language } = useContext(langContext);
  const [nickelCobalt, setNickelCobalt] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43e06b9e34a0df87694ae"
      );
      const data = response.data;
      setNickelCobalt(data);
    };
    fetchData();
  }, []);
  if (nickelCobalt.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page4={true} />
        <AboutMain>
          <BusinessWrited title>
            {NickleCobaltLangTitle(nickelCobalt, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                NickleCobaltLangBody(nickelCobalt, language).props.children
              }
            />
          </BusinessWrited>
          {nickelCobalt.images.map((data) => {
            return <ImageBusiness src={data.url} />;
          })}
          <BusinessWrited>
            <ReactMarkdown
              children={
                NickleCobaltLangBody2(nickelCobalt, language).props.children
              }
            />
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default NickelCobaltHPALComponents;

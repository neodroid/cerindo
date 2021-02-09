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
            {NickleCobaltLangBody(nickelCobalt, language)}
          </BusinessWrited>
          {nickelCobalt.images.map((data) => {
            return <ImageBusiness src={data.url} />;
          })}
          <BusinessWrited>
            {NickleCobaltLangBody2(nickelCobalt, language)}
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default NickelCobaltHPALComponents;

import React, { useState, useEffect, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { NickleOreMiningContent } from "../../Data/BusinessData/NickleOreMiningDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import { NickleOreLangBody, NickleOreLangTitle } from "./NickleOreLang";

const NickleOreComponents = () => {
  const { language } = useContext(langContext);
  const [nickelOre, setNickelOre] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff4395df736711508e898f1"
      );
      const data = response.data;
      setNickelOre(data);
    };
    fetchData();
  }, []);
  if (nickelOre.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page1={true} />
        <AboutMain>
          <BusinessWrited title>
            {NickleOreLangTitle(nickelOre, language)}
          </BusinessWrited>
          <BusinessWrited>
            {NickleOreLangBody(nickelOre, language)}
          </BusinessWrited>
          {nickelOre.images.map((data) => {
            return <ImageBusiness src={data.url} />;
          })}
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default NickleOreComponents;

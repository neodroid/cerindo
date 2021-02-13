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
import {
  NickleOreLangBody,
  NickleOreLangTitle,
  NickleOreLangBody2,
} from "./NickleOreLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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
            <ReactMarkdown
              children={NickleOreLangBody(nickelOre, language).props.children}
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
          {nickelOre.images.map((data) => {
            return <ImageBusiness src={data.url} />;
          })}
          <BusinessWrited>
            <ReactMarkdown
              children={NickleOreLangBody2(nickelOre, language).props.children}
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default NickleOreComponents;

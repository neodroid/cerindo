import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { Imageqhse, Images, WritedPart } from "./QHSEElements";
import { langContext } from "../../../langContext";
import { QHSEContentLangTitle, QHSEContentLangBody } from "./QHSELang";

const QHSEComponents = () => {
  const { language } = useContext(langContext);
  const [QHSEContent, setQHSEContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.QHSE;
      setQHSEContent(data);
    };
    fetchData();
  }, []);

  if (QHSEContent.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page1={true} />
        <AboutMain>
          <Images>
            <Imageqhse src={QHSEContent.image.url} />
          </Images>
          <WritedPart>
            <BusinessWrited title>{QHSEContentLangTitle(QHSEContent, language)}</BusinessWrited>
            <BusinessWrited>{QHSEContentLangBody(QHSEContent, language)}</BusinessWrited>
          </WritedPart>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default QHSEComponents;

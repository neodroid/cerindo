import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { Imageqhse, Images, WritedPart, Apart } from "./QHSEElements";
import { langContext } from "../../../langContext";
import { QHSEContentLangTitle, QHSEContentLangBody } from "./QHSELang";
import ReactMarkdown from "react-markdown";

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
          <Apart>
            <WritedPart>
              <BusinessWrited title>
                <ReactMarkdown
                  children={
                    QHSEContentLangTitle(QHSEContent, language).props.children
                  }
                />
              </BusinessWrited>
              <BusinessWrited>
                <ReactMarkdown
                  children={
                    QHSEContentLangBody(QHSEContent, language).props.children
                  }
                />
              </BusinessWrited>
            </WritedPart>
            <Images>
              <Imageqhse src={QHSEContent.image.url} />
            </Images>
          </Apart>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default QHSEComponents;

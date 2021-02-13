import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { JettyTerminalContent } from "../../Data/BusinessData/JettyTerminalDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  OreExportLangTitle,
  OreExportLangBody,
  OreExportLangBody2,
} from "./OreExportLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const OreExportComponents = () => {
  const { language } = useContext(langContext);
  const [oreExport, setOreExport] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43e54b9e34a0df87694af"
      );
      const data = response.data;
      setOreExport(data);
    };
    fetchData();
  }, []);
  if (oreExport.length === 0) return null;

  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page5={true} />
        <AboutMain>
          <BusinessWrited title>
            {OreExportLangTitle(oreExport, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={OreExportLangBody(oreExport, language).props.children}
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
          {oreExport.images.map((data) => {
            return <ImageBusiness src={data.url} />;
          })}
          <BusinessWrited>
            <ReactMarkdown
              children={OreExportLangBody2(oreExport, language).props.children}
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default OreExportComponents;

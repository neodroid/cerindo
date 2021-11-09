import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { PortOperationsContent } from "../../Data/BusinessData/PortOperationsDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  PortOperationsLangBody,
  PortOperationsLangTitle,
  PortOperationsLangBody2,
} from "./PortOperationsLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const PortOperationsComponents = () => {
  const { language } = useContext(langContext);
  const [portOperations, setPortOperations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "618a31404161220b3a25edcd"
      );
      const data = response.data;
      setPortOperations(data);
    };
    fetchData();
  }, []);
  if (portOperations.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page7={true} />
        <AboutMain>
          <BusinessWrited title>
            {PortOperationsLangTitle(portOperations, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                PortOperationsLangBody(portOperations, language).props.children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>

          <BusinessWrited>
            <ReactMarkdown
              children={
                PortOperationsLangBody2(portOperations, language).props.children
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
export default PortOperationsComponents;

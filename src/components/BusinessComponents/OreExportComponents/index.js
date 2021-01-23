import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import {
  Aboutstyle,
  AboutMain,
} from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { JettyTerminalContent } from "../../Data/BusinessData/JettyTerminalDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import { JettyTerminalLangTitle, JettyTerminalLangBody } from "./JettyTerminalLang";

const OreExportComponents = () => {
  const { language } = useContext(langContext);
  const [jettyTerminal, setJettyTerminal] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43e54b9e34a0df87694af"
      );
      const data = response.data;
      setJettyTerminal(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page5={true} />
        <AboutMain>
          <BusinessWrited title>{JettyTerminalLangTitle(jettyTerminal, language)}</BusinessWrited>
          <BusinessWrited>
            {JettyTerminalLangBody(jettyTerminal, language)}
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default OreExportComponents;

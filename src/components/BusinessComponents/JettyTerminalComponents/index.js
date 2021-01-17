import React, { useEffect, useState } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { JettyTerminalContent } from "../../Data/BusinessData/JettyTerminalDatas";
import { businessService } from "../../../service/Business";

const JettyTerminalComponents = () => {
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
      <Businessstyle>
        <BusinessSideBarComponents page5={true} />
        <BusinessMain>
          <BusinessWrited title>{jettyTerminal.title_en}</BusinessWrited>
          <BusinessWrited>{jettyTerminal.body_en}</BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default JettyTerminalComponents;

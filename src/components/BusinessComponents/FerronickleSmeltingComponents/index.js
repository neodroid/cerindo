import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { FerronickleSmeltingContent } from "../../Data/BusinessData/FerronickleSmeltingDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import { FerronickleLangTitle, FerronickleLangBody } from "./FerronickleSmeltingLang";

const FerronickleSmeltingComponents = () => {
  const { language } = useContext(langContext);
  const [ferronicle, setFerronicle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43b56b545d223a4997ccd"
      );
      const data = response.data;
      setFerronicle(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Businessstyle>
        <BusinessSideBarComponents page2={true} />
        <BusinessMain>
          <BusinessWrited title>{FerronickleLangTitle(ferronicle, language)}</BusinessWrited>
          <BusinessWrited>
            {FerronickleLangBody(ferronicle, language)}
          </BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default FerronickleSmeltingComponents;

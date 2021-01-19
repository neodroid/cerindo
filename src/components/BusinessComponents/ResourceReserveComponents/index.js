import React, { useState, useEffect, useContext } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { ResourceReserveContent } from "../../Data/BusinessData/ResourceReserveDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import { ResourceReserveLangBody, ResourceReserveLangTitle } from "./ResourceReserverLang";

const ResourceReserveComponents = () => {
  const { language } = useContext(langContext);
  const [resourceReserve, setResourceReserve] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43dbbb9e34a0df87694ad"
      );
      const data = response.data;
      setResourceReserve(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Businessstyle>
        <BusinessSideBarComponents page3={true} />
        <BusinessMain>
          <BusinessWrited title>{ResourceReserveLangTitle(resourceReserve, language)}</BusinessWrited>
          <BusinessWrited>
            {ResourceReserveLangBody(resourceReserve, language)}
          </BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default ResourceReserveComponents;

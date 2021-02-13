import React, { useState, useEffect, useContext } from "react";
import {
  Resve,
  ImageBusiness,
  BusinessWrited,
  ResveImage,
} from "../BusinessElements";
import testing1 from "../../../images/driling2017a.png";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { ResourceReserveContent } from "../../Data/BusinessData/ResourceReserveDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  ResourceReserveLangBody,
  ResourceReserveLangBody2,
  ResourceReserveLangTitle,
} from "./ResourceReserverLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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

  if (resourceReserve.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page3={true} />
        <AboutMain>
          <BusinessWrited title>
            {ResourceReserveLangTitle(resourceReserve, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                ResourceReserveLangBody(resourceReserve, language).props
                  .children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
          <BusinessWrited>
            <b>Table Drilling Data before 2017</b>
          </BusinessWrited>
          <Resve>
            <ResveImage src={resourceReserve.images[0].url} />
          </Resve>
          <BusinessWrited>
            <b>Table Drilling Data before 2017 - 2020</b>
          </BusinessWrited>
          <Resve>
            <ResveImage src={resourceReserve.images[1].url} />
          </Resve>
          <BusinessWrited>
            <b>IUP Ceria Drilling Distribution Map</b>
          </BusinessWrited>
          <ImageBusiness src={resourceReserve.images[2].url} />
          <BusinessWrited>
            <ReactMarkdown
              children={
                ResourceReserveLangBody2(resourceReserve, language).props
                  .children
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
export default ResourceReserveComponents;

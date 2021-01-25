import React, { useState, useEffect } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { Imageqhse, Images, WritedPart } from "./QHSEElements";

const QHSEComponents = () => {
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
            <BusinessWrited title>{QHSEContent.title_en}</BusinessWrited>
            <BusinessWrited>{QHSEContent.body_en}</BusinessWrited>
          </WritedPart>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default QHSEComponents;

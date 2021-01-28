import React, { useState, useEffect } from "react";
import { sustainService } from "../service/Sustainability";
import Banner from "../components/Banner";
import QHSEComponents from "../components/SustainabilityComponents/QHSEComponents";

const QHSE = () => {
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
      {QHSEContent.banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} place="Global Sustainability"/>;
      })}
      <QHSEComponents />
    </>
  );
};

export default QHSE;

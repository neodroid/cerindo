import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import Banner from "../components/Banner";
import OreExportComponents from "../components/BusinessComponents/OreExportComponents";

const OreExport = () => {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getListBusiness();
      const data = response.data;
      setBusinessList(data);
    };
    fetchData();
  }, []);

  if (businessList.length === 0) return null;
  return (
    <>
      <Banner img={businessList[4].thumbnail.url} texted={true} />
      <OreExportComponents />
    </>
  );
};

export default OreExport;

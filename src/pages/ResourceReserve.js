import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { ResourceReserveHead } from "../components/Data/BusinessData/ResourceReserveDatas";
import Banner from "../components/Banner";
import ResourceReserveComponents from "../components/BusinessComponents/ResourceReserveComponents";

const ResourceReserve = () => {
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
      <Banner img={businessList[2].banner[0].url} texted={true} />
      <ResourceReserveComponents />
    </>
  );
};

export default ResourceReserve;

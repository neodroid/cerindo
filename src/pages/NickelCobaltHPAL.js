import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { HPALHead } from "../components/Data/BusinessData/HPALDatas";
import Banner from "../components/Banner";
import NickelCobaltHPALComponents from "../components/BusinessComponents/NickelCobaltHPALComponents";

const NickleCobaltHPAL = () => {
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
      {businessList[3].banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} place="Business"/>;
      })}
      <NickelCobaltHPALComponents />
    </>
  );
};

export default NickleCobaltHPAL;

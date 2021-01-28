import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { NickleOreMiningHead } from "../components/Data/BusinessData/NickleOreMiningDatas";
import Banner from "../components/Banner";
import NickleOreComponents from "../components/BusinessComponents/NickleOreComponents";

const NickleOreMining = () => {
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
      {businessList[0].banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} place="Business"/>;
      })}
      <NickleOreComponents />
    </>
  );
};

export default NickleOreMining;

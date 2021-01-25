import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { PowerPlantHead } from "../components/Data/BusinessData/PowerPlantDatas";
import Banner from "../components/Banner";
import PowerPlantComponents from "../components/BusinessComponents/PowerPlantComponents";

const PowerPlant = () => {
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
      {businessList[5].banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} />;
      })}
      <PowerPlantComponents />
    </>
  );
};

export default PowerPlant;

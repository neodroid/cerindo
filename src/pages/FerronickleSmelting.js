import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { FerronickleSmeltingHead } from "../components/Data/BusinessData/FerronickleSmeltingDatas";
import Banner from "../components/Banner";

import FerronickleSmeltingComponents from "../components/BusinessComponents/FerronickleSmeltingComponents";

const FerronickleSmelting = () => {
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
      {businessList[1].banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} place="Business"/>;
      })}
      <FerronickleSmeltingComponents />
    </>
  );
};

export default FerronickleSmelting;

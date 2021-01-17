import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { JettyTerminalHead } from "../components/Data/BusinessData/JettyTerminalDatas";
import Banner from "../components/Banner";
import JettyTerminalComponents from "../components/BusinessComponents/JettyTerminalComponents";

const JettyTerminal = () => {
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
      <JettyTerminalComponents />
    </>
  );
};

export default JettyTerminal;

import React, { useEffect, useState } from "react";
import { aboutUsService } from "../service/Aboutus";
import Banner from "../components/Banner";
import { SubsidiaryHead } from "../components/Data/AboutusData/SubsidiaryDatas";
import SubsidiaryComponents from "../components/AboutUsComponents/SubsidiaryComponents";

const Subsidiary = () => {
  const [subsidiary, setSubsidiary] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setSubsidiary(data.companySubsidiary);
    };
    fetchData();
  }, []);

  if (subsidiary.length === 0) return null;
  return (
    <>
      {subsidiary.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            lightText={true}
            heading="COMPANY SUBSIDIARY"
            key={idx}
          />
        );
      })}
      <SubsidiaryComponents />
    </>
  );
};

export default Subsidiary;

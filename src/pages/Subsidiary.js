import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../service/Aboutus";
import Banner from "../components/Banner";
import { SubsidiaryHead } from "../components/Data/AboutusData/SubsidiaryDatas";
import SubsidiaryComponents from "../components/AboutUsComponents/SubsidiaryComponents";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const Subsidiary = () => {
  const { language } = useContext(langContext);
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
            texted={true}
            key={idx}
            place={AboutUsTitle(language)}
          />
        );
      })}
      <SubsidiaryComponents />
    </>
  );
};

export default Subsidiary;

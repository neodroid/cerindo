import React, { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import { OrganizationHead } from "../components/Data/AboutusData/OrganizationDatas";
import OrganizationComponents from "../components/AboutUsComponents/OrganizationComponents";
import { aboutUsService } from "../service/Aboutus";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const Organization = () => {
  const { language } = useContext(langContext);
  const [organization, setOrganization] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setOrganization(data.organizationStructure);
    };
    fetchData();
  }, []);
  if (organization.length === 0) return null;
  return (
    <>
      {organization.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            texted={true}
            key={idx}
            place={AboutUsTitle(language)}
          />
        );
      })}
      <OrganizationComponents />
    </>
  );
};

export default Organization;

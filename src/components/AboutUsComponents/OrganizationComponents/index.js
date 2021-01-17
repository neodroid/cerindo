import React, { useState, useEffect } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { aboutUsService } from "../../../service/Aboutus";
import AboutSideBarComponents from "../index";
import { OrgWrapped } from "./OrganizationElements";
import { OrgData } from "../../Data/AboutusData/OrganizationDatas";

const OrganizationComponents = () => {
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
      <Aboutstyle>
        <AboutSideBarComponents page4={true}/>
        <AboutMain>
          <OrgWrapped>
            <img
              src={organization.Structure_image.url}
              alt="structure"
              width={`782px`}
            />
          </OrgWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default OrganizationComponents;

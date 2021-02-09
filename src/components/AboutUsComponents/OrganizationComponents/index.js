import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { aboutUsService } from "../../../service/Aboutus";
import AboutSideBarComponents from "../index";
import { OrgWrapped, Imagess, ImagePart } from "./OrganizationElements";
import { OrgData } from "../../Data/AboutusData/OrganizationDatas";
import {
  CommitmentContent,
  CommitmentWrited,
} from "../CommitmentComponents/CommitmentElements";
import { langContext } from "../../../langContext";
import {
  OrganizationLangBody,
  OrganizationLangTitle,
} from "./OrganizationLang";

const OrganizationComponents = () => {
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
      <Aboutstyle>
        <AboutSideBarComponents page5={true} />
        <AboutMain>
          <OrgWrapped>
            <CommitmentWrited>
              {OrganizationLangTitle(organization, language)}
            </CommitmentWrited>
            <CommitmentWrited>
              {OrganizationLangBody(organization, language)}
            </CommitmentWrited>
            <ImagePart>
              <Imagess src={organization.Structure_image.url} alt="structure" />
            </ImagePart>
          </OrgWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default OrganizationComponents;

import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { aboutUsService } from "../../../service/Aboutus";
import {
  SubsidaryConstruct,
  PhasexpData,
  SubsidiaryexpData,
} from "../../Data/AboutusData/SubsidiaryDatas";
import { FaAngleRight } from "react-icons/fa";
import {
  SubsidiaryContent,
  Phasexp,
  PhaseWrited,
  PhaseWritedApart,
  SubsidiaryExp,
} from "./SubsidiaryElements";
import { langContext } from "../../../langContext";
import { SubsidiaryLang } from "./SubsidiaryLang";

const SubsidiaryComponents = () => {
  const { language } = useContext(langContext);
  const [detailSubsidiary, setDetailSubsidiary] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setDetailSubsidiary(data.companySubsidiary);
    };
    fetchData();
  }, []);
  console.log(detailSubsidiary);

  if (detailSubsidiary.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBar>
          <AboutSideBarContent to="/Mission-Vision">
            Mission, Vision and Value
          </AboutSideBarContent>
          <AboutSideBarContent page to="/Subsidiary">
            Company Subsidiary
          </AboutSideBarContent>
          <AboutSideBarContent to="/Board-of-Director">
            Board of Director
          </AboutSideBarContent>
          <AboutSideBarContent to="/Organization-Structure">
            Organization Structure
          </AboutSideBarContent>
          <AboutSideBarContent to="/History-Milestone">
            History and Milestone
          </AboutSideBarContent>
          <AboutSideBarContent to="/Concession-Area">
            Concession Area
          </AboutSideBarContent>
          <AboutSideBarContent to="/License-And-Award">
            License and Award
          </AboutSideBarContent>
        </AboutSideBar>
        <AboutMain>
          <SubsidiaryContent>
            <img
              src={detailSubsidiary.company_subsidiary_image.url}
              width={`700px`}
            />
            {PhasexpData.map((data, idx) => {
              return (
                <Phasexp key={idx}>
                  <PhaseWrited>
                    <PhaseWritedApart>{data.title}</PhaseWritedApart>
                    <PhaseWritedApart simbol>
                      <FaAngleRight />
                    </PhaseWritedApart>
                  </PhaseWrited>
                </Phasexp>
              );
            })}
            <SubsidiaryExp>
              {SubsidiaryLang(detailSubsidiary, language)}
            </SubsidiaryExp>
            ;
          </SubsidiaryContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default SubsidiaryComponents;

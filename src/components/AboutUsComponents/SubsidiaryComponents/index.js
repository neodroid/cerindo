import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { aboutUsService } from "../../../service/Aboutus";
import AboutSideBarComponents from "../index";
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
  Images,
  SubsExpCon
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
        <AboutSideBarComponents page3={true}/>
        <AboutMain>
          <SubsidiaryContent>
            <Images
              src={detailSubsidiary.company_subsidiary_image.url}
            />
            <SubsidiaryExp>As of 21 January 2021</SubsidiaryExp> {/*Tanggal di sini*/}
            <SubsExpCon>
            <SubsidiaryExp><strong>Disclaimer</strong>{SubsidiaryLang(detailSubsidiary, language)}</SubsidiaryExp>
            </SubsExpCon>
          </SubsidiaryContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default SubsidiaryComponents;

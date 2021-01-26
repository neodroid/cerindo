import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { LicenseData, ConcessionData } from "../../Data/AboutusData/LicenseDatas";
import { aboutUsService } from "../../../service/Aboutus";
import {
  LicWrapped,ConcessionImage,
  LicContent,
  LicBoxWrited,
  AwardContent,
  ConcessionExp,
  LicContents,ConcessionWrited,
  ConcessionContent,
  ImageCentered
} from "./LicenseElements";

import { langContext } from "../../../langContext";
import { LicenseTitle, LicenseContent } from './LicenseLang';

const LicenseComponents = () => {
  const {language} = useContext(langContext);
  const [license, setLicense] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setLicense(data.license_and_award);
    };
    fetchData();
  }, []);
  console.log(license);

  if (license.length === 0) return null;

  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page7={true}/>
        <AboutMain>
          <LicWrapped>
            {LicenseData.map((data, idx) => {
                return (
                  <LicContents wrap key={idx}>
                    <LicContent>
                      <LicContent wrap>
                        <LicBoxWrited title>{data.title}</LicBoxWrited>
                        <LicBoxWrited>{data.content}</LicBoxWrited>
                      </LicContent>
                    </LicContent>
                  </LicContents>
                );
            })}
            <AwardContent>
              <h2>Concession Area</h2>
              {ConcessionData.map((data,idx)=>{
                return(
                  <>
                  <ImageCentered src={data.imageCenter} />
                  <ConcessionExp>
                    <ConcessionContent>
                      <ConcessionWrited>{data.desc}</ConcessionWrited>
                    </ConcessionContent>
                    <ConcessionContent>
                      <ConcessionImage src={data.imageSide}/>
                    </ConcessionContent>
                  </ConcessionExp>
                  </>
                )
              })}
            </AwardContent>
          </LicWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default LicenseComponents;

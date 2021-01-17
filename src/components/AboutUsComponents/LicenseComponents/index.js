import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { LicenseData, AwardData } from "../../Data/AboutusData/LicenseDatas";
import { aboutUsService } from "../../../service/Aboutus";
import {
  LicWrapped,
  LicContent,
  LicBoxWrited,
  AwardContent,
  Figured,
  LicContents,
  LicImageApart,
  LicImage
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
            {license.license.map((data, idx) => {
              if (idx % 2 == 0) {
                return (
                  <LicContents wrap key={idx}>
                    <LicContent>
                      <LicContent wrap>
                        <LicBoxWrited title>{LicenseTitle(data, language)}</LicBoxWrited>
                        <LicBoxWrited>{LicenseContent(data, language)}</LicBoxWrited>
                      </LicContent>
                      <LicImageApart>
                      <LicImage src={data.image.url} width={`332px`} />
                      </LicImageApart>
                    </LicContent>
                  </LicContents>
                );
              } else {
                return (
                  <LicContents wrap key={idx}>
                    <LicContent>
                      <LicImageApart>
                      <LicImage src={data.image.url} width={`332px`} />
                      </LicImageApart>
                      <LicContent wrap>
                        <LicBoxWrited title>{LicenseTitle(data, language)}</LicBoxWrited>
                        <LicBoxWrited>{LicenseContent(data, language)}</LicBoxWrited>
                      </LicContent>
                    </LicContent>
                  </LicContents>
                );
              }
            })}
            <AwardContent>
              <h2>Awards</h2>
              {license.Awards.map((data, idx) => {
                return (
                  <Figured key={idx}>
                    <img src={data.award_img.url} alt={data.image} />
                    <figcaption>{data.award_name}</figcaption>
                  </Figured>
                );
              })}
            </AwardContent>
          </LicWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default LicenseComponents;

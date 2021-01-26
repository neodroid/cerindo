import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { aboutUsService } from "../../../service/Aboutus";
import {
  LicWrapped,
  ConcessionImage,
  LicContent,
  LicBoxWrited,
  AwardContent,
  ConcessionExp,
  LicContents,
  ConcessionWrited,
  ConcessionContent,
  ImageCentered,
} from "./LicenseElements";

import { langContext } from "../../../langContext";

const LicenseComponents = () => {
  const { language } = useContext(langContext);
  const [license, setLicense] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setLicense(data.license_and_concession);
    };
    fetchData();
  }, []);
  console.log(license);

  if (license.length === 0) return null;

  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page7={true} />
        <AboutMain>
          <LicWrapped>
            {license.license.map((data, idx) => {
              return (
                <LicContents wrap key={idx}>
                  <LicContent>
                    <LicContent wrap>
                      <LicBoxWrited title>{data.title_en}</LicBoxWrited>
                      <LicBoxWrited>{data.content_en}</LicBoxWrited>
                    </LicContent>
                  </LicContent>
                </LicContents>
              );
            })}
            <AwardContent>
              <h2>Concession Area</h2>
              {license.Concession.map((data, idx) => {
                return (
                  <>
                    <ImageCentered src={data.concession_images[0].url} />
                    <ConcessionExp>
                      <ConcessionContent>
                        <ConcessionWrited>{data.body_en}</ConcessionWrited>
                      </ConcessionContent>
                      <ConcessionContent>
                        <ConcessionImage src={data.concession_images[1].url} />
                      </ConcessionContent>
                    </ConcessionExp>
                  </>
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

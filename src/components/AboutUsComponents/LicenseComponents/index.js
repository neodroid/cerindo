import React, { useState, useEffect } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { LicenseData, AwardData } from "../../Data/AboutusData/LicenseDatas";
import { aboutUsService } from "../../../service/Aboutus";
import {
  LicWrapped,
  LicContent,
  LicBoxWrited,
  AwardContent,
  Figured,
} from "./LicenseElements";

const LicenseComponents = () => {
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
        <AboutSideBar>
          <AboutSideBarContent to="/Mission-Vision">
            Mission, Vision and Value
          </AboutSideBarContent>
          <AboutSideBarContent to="/Subsidiary">
            Company Subsidiary
          </AboutSideBarContent>
          <AboutSideBarContent to="/Board-of-Director">
            Board of Director
          </AboutSideBarContent>
          <AboutSideBarContent to="/license-Structure">
            license Structure
          </AboutSideBarContent>
          <AboutSideBarContent to="/History-Milestone">
            History and Milestone
          </AboutSideBarContent>
          <AboutSideBarContent to="/Concession-Area">
            Concession Area
          </AboutSideBarContent>
          <AboutSideBarContent page to="/License-And-Award">
            License and Award
          </AboutSideBarContent>
        </AboutSideBar>
        <AboutMain>
          <LicWrapped>
            {LicenseData.map((data, idx) => {
              if (idx % 2 == 0) {
                return (
                  <LicContent wrap key={idx}>
                    <LicContent>
                      <LicContent wrap>
                        <LicBoxWrited title>{data.title}</LicBoxWrited>
                        <LicBoxWrited>{data.content}</LicBoxWrited>
                      </LicContent>
                      <img src={data.image} width={`332px`} />
                    </LicContent>
                  </LicContent>
                );
              } else {
                return (
                  <LicContent wrap key={idx}>
                    <LicContent>
                      <img src={data.image} width={`332px`} />
                      <LicContent wrap>
                        <LicBoxWrited title>{data.title}</LicBoxWrited>
                        <LicBoxWrited>{data.content}</LicBoxWrited>
                      </LicContent>
                    </LicContent>
                  </LicContent>
                );
              }
            })}
            <AwardContent>
              <h2>Awards</h2>
              {AwardData.map((data, idx) => {
                return (
                  <Figured key={idx}>
                    <img src={data.image} alt={data.image} />
                    <figcaption>{data.desc}</figcaption>
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

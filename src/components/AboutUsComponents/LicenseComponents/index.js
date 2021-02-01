import React, { useState, useEffect, useContext } from "react";
import {ReportDownload} from "../../Data/SustainabilityData/ReportsDatas"
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
import {
  TabelDownload,
  ApartContentTable,
  ContentTable,
  ButtonTable
} from "../../SustainabilityComponents/ReportsComponents/ReportsElements"

import { langContext } from "../../../langContext";
import { LicenseContent, LicenseTitle, LicenseBody } from "./LicenseLang";

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
                      <LicBoxWrited title>{LicenseTitle(data, language)}</LicBoxWrited>
                      <LicBoxWrited>{LicenseContent(data, language)}</LicBoxWrited>
                    </LicContent>
                  </LicContent>
                </LicContents>
              );
            })}
            <TabelDownload>
          {ReportDownload.map((data,idx)=>{
            if(idx%2 == 0) {
            return(
                <div key={idx} style={{background:"#FAFAFA"}}>
                  <ApartContentTable content>
                    <ContentTable>{data.title}</ContentTable>
                  </ApartContentTable>
                  <ApartContentTable>
                    <ButtonTable href={data.link}>DOWNLOAD</ButtonTable>
                  </ApartContentTable>
                </div>
            )} else {
              return(
                <div key={idx} style={{background:"#F5F5F5"}}>
                  <ApartContentTable content>
                    <ContentTable>{data.title}</ContentTable>
                  </ApartContentTable>
                  <ApartContentTable>
                    <ButtonTable href={data.link}>DOWNLOAD</ButtonTable>
                  </ApartContentTable>
                </div>
              )
            }
          })}
          </TabelDownload>
            <AwardContent>
              <h2>Concession Area</h2>
              {license.Concession.map((data, idx) => {
                return (
                  <>
                    <ImageCentered src={data.concession_images[0].url} />
                    <ConcessionExp>
                      <ConcessionContent>
                        <ConcessionWrited>{LicenseBody(data, language)}</ConcessionWrited>
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

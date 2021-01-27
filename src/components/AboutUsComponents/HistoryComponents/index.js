import React from "react";
import { useContext, useState, useEffect } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { aboutUsService } from "../../../service/Aboutus";
import {
  HistoryData,
  MilestoneData,
  ComplianceData,
} from "../../Data/AboutusData/HistoryDatas";
import {
  HisWrapped,
  HisContent,
  HisBoxWrited,
  MilestoneContent,
  MilesBoxContent,
  MilesBoxApart,
  MilesYearContent,
  Birght,
  Images,
  MilesImage,
  MilesImageDesc,
  Opac,
  HisContents,
  HisImage,
  ImagWrited,
  HisImageApart,
  ImagePart,
} from "./HistoryElements";

import { langContext } from "../../../langContext";
import { HistoryLangTitle, HistoryLangDesc, HistoryLangMilestone } from "./HistoryLang";

const HistoryComponents = () => {
  const { language } = useContext(langContext);
  const [historyMileStone, setHistoryMilestone] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setHistoryMilestone(data.hisMil);
    };
    fetchData();
  }, []);

  console.log(historyMileStone);
  if (historyMileStone.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page6={true} />
        <AboutMain>
          <HisWrapped>
            {historyMileStone.histories.map((data, idx) => {
              return (
                <HisContents wrap key={idx}>
                  <HisContent>
                    <HisContent wrap>
                      <HisBoxWrited title>
                        {HistoryLangTitle(data, language)}
                      </HisBoxWrited>
                      <HisBoxWrited>
                        {HistoryLangDesc(data, language)}
                      </HisBoxWrited>
                    </HisContent>
                  </HisContent>
                </HisContents>
              );
            })}
            <MilestoneContent>
              <ImagWrited>{HistoryLangMilestone(historyMileStone, language)}</ImagWrited>
              <ImagePart>
                <Images src={historyMileStone.Timeline[0].Timeline.url} />
              </ImagePart>
              <h2>Milestone</h2>
              {historyMileStone.milestone.map((data, idx) => {
                return (
                  <MilesBoxContent key={idx}>
                    <MilesBoxApart year>
                      <MilesYearContent>{data.year}</MilesYearContent>
                    </MilesBoxApart>
                    <Birght />
                    <MilesBoxApart>
                      <MilesImage img={data.image.url}>
                        <Opac />
                        <MilesImageDesc>
                          {HistoryLangTitle(data, language)}
                        </MilesImageDesc>
                      </MilesImage>
                    </MilesBoxApart>
                  </MilesBoxContent>
                );
              })}
            </MilestoneContent>
          </HisWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default HistoryComponents;

import React from "react";
import {useContext, useState, useEffect} from 'react'
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
  MilesImage,
  MilesImageDesc,
  Opac,
} from "./HistoryElements";

import { langContext } from "../../../langContext";
import { 
  HistoryLangTitle, 
  HistoryLangDesc, 
} from "./HistoryLang";

const HistoryComponents = () => {
  const {language} = useContext(langContext);
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
        <AboutSideBarComponents page5={true}/>
        <AboutMain>
          <HisWrapped>
            {historyMileStone.histories.map((data, idx) => {
              if (idx % 2 == 0) {
                return (
                  <HisContent wrap key={idx}>
                    <HisContent>
                      <HisContent wrap>
                        <HisBoxWrited title>{HistoryLangTitle(data, language)}</HisBoxWrited>
                        <HisBoxWrited>{HistoryLangDesc(data, language)}</HisBoxWrited>
                      </HisContent>
                      <img src={data.history_image.url} width={`332px`} />
                    </HisContent>
                  </HisContent>
                );
              } else {
                return (
                  <HisContent wrap key={idx}>
                    <HisContent>
                      <img src={data.history_image.url} width={`332px`} />
                      <HisContent wrap>
                        <HisBoxWrited title>{HistoryLangTitle(data, language)}</HisBoxWrited>
                        <HisBoxWrited>{HistoryLangDesc(data, language)}</HisBoxWrited>
                      </HisContent>
                    </HisContent>
                  </HisContent>
                );
              }
            })}
            <MilestoneContent>
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
                        <MilesImageDesc>{HistoryLangTitle(data, language)}</MilesImageDesc>
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

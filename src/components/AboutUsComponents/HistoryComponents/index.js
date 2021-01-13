import React from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
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

const HistoryComponents = () => {
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
          <AboutSideBarContent to="/Organization-Structure">
            Organization Structure
          </AboutSideBarContent>
          <AboutSideBarContent page to="/History-Milestone">
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
          <HisWrapped>
            {HistoryData.map((data, idx) => {
              if (idx % 2 == 0) {
                return (
                  <HisContent wrap key={idx}>
                    <HisContent>
                      <HisContent wrap>
                        <HisBoxWrited title>{data.title}</HisBoxWrited>
                        <HisBoxWrited>{data.content}</HisBoxWrited>
                      </HisContent>
                      <img src={data.image} width={`332px`} />
                    </HisContent>
                  </HisContent>
                );
              } else {
                return (
                  <HisContent wrap key={idx}>
                    <HisContent>
                      <img src={data.image} width={`332px`} />
                      <HisContent wrap>
                        <HisBoxWrited title>{data.title}</HisBoxWrited>
                        <HisBoxWrited>{data.content}</HisBoxWrited>
                      </HisContent>
                    </HisContent>
                  </HisContent>
                );
              }
            })}
            <MilestoneContent>
              <h2>Milestone</h2>
              {MilestoneData.map((data, idx) => {
                return (
                  <MilesBoxContent key={idx}>
                    <MilesBoxApart year>
                      <MilesYearContent>{data.year}</MilesYearContent>
                    </MilesBoxApart>
                    <Birght />
                    <MilesBoxApart>
                      <MilesImage img={data.image}>
                        <Opac />
                        <MilesImageDesc>{data.title}</MilesImageDesc>
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

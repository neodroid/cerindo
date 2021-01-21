import React, { useState, useEffect } from "react";
import { phasesService } from "../../service/Phases";
import { PhaseAllImage } from "../Data/PhaseData/PhaseDatas";
import {
  BusinessSideBar,
  BusinessSideBarContent,
  BusinessSideBarImage,
  ArrowDiv,
  ArrowDownLang,
  TextButton,
  DropDown,
  Dropbtn,
  Contentt,
  Changed,
} from "../BusinessComponents/BusinessElements";

const PhaseSideBarComponents = ({ page1, page2, page3, page4, page5 }) => {
  const [phase, setPhase] = useState([]);
  const [selected, setSelected] = useState(true);
  const fetchData = async () => {
    const response = await phasesService.getListPhases();
    const data = response.data;
    setPhase(data);
  };
  const Clickit = () => {
    setSelected(!selected);
  };
  useEffect(() => {
    Clickit();
    fetchData();
  }, []);
  if (phase.length === 0) return null;
  return (
    <>
      <BusinessSideBar>
        <DropDown tabIndex={-1}>
          <Dropbtn onClick={Clickit}>
            <TextButton page={page1}>Phase 1</TextButton>
            <TextButton page={page2}>Phase 2</TextButton>
            <TextButton page={page3}>Phase 3</TextButton>
            <TextButton page={page4}>Phase 3a</TextButton>
            <TextButton page={page5}>PT Ceria Cobalt Indotama</TextButton>

            <ArrowDiv>
              {selected ? (
                <ArrowDownLang style={{ transform: "rotate(225deg)" }} />
              ) : (
                <ArrowDownLang />
              )}
            </ArrowDiv>
          </Dropbtn>
          {selected ? (
            <Contentt>
              <BusinessSideBarImage img={phase[0].thumbnail.url}>
                <BusinessSideBarContent page={page1} to="/Phase/Phase 1">
                  Phase 1
                </BusinessSideBarContent>
              </BusinessSideBarImage>
              <BusinessSideBarImage img={phase[1].thumbnail.url}>
                <BusinessSideBarContent page={page2} to="/Phase/Phase 2">
                  Phase 2
                </BusinessSideBarContent>
              </BusinessSideBarImage>
              <BusinessSideBarImage img={phase[2].thumbnail.url}>
                <BusinessSideBarContent page={page3} to="/Phase/Phase 3">
                  Phase 3
                </BusinessSideBarContent>
              </BusinessSideBarImage>
              <BusinessSideBarImage img={phase[3].thumbnail.url}>
                <BusinessSideBarContent page={page4} to="/Phase/Phase 3a">
                  Phase 3a
                </BusinessSideBarContent>
              </BusinessSideBarImage>
              <BusinessSideBarImage img={phase[4].thumbnail.url}>
                <BusinessSideBarContent
                  page={page5}
                  to="/Phase/PT Ceria Cobalt Indotama"
                >
                  PT Ceria Cobalt Indotama
                </BusinessSideBarContent>
              </BusinessSideBarImage>
            </Contentt>
          ) : (
            <Changed>
              <Contentt>
                <BusinessSideBarImage img={phase[0].thumbnail.url}>
                  <BusinessSideBarContent page={page1} to="/Phase/Phase 1">
                    Phase 1
                  </BusinessSideBarContent>
                </BusinessSideBarImage>
                <BusinessSideBarImage img={phase[1].thumbnail.url}>
                  <BusinessSideBarContent page={page2} to="/Phase/Phase 2">
                    Phase 2
                  </BusinessSideBarContent>
                </BusinessSideBarImage>
                <BusinessSideBarImage img={phase[2].thumbnail.url}>
                  <BusinessSideBarContent page={page3} to="/Phase/Phase 3">
                    Phase 3
                  </BusinessSideBarContent>
                </BusinessSideBarImage>
                <BusinessSideBarImage img={phase[3].thumbnail.url}>
                  <BusinessSideBarContent page={page4} to="/Phase/Phase 3a">
                    Phase 3a
                  </BusinessSideBarContent>
                </BusinessSideBarImage>
                <BusinessSideBarImage img={phase[4].thumbnail.url}>
                  <BusinessSideBarContent
                    page={page5}
                    to="/Phase/PT ceria Cobalt Indotama"
                  >
                    PT Ceria Cobalt Indotama
                  </BusinessSideBarContent>
                </BusinessSideBarImage>
              </Contentt>
            </Changed>
          )}
        </DropDown>
      </BusinessSideBar>
    </>
  );
};
export default PhaseSideBarComponents;

import React,{ useState, useEffect } from "react";
import {PhaseAllImage} from "../Data/PhaseData/PhaseDatas";
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
    Changed
} from "../BusinessComponents/BusinessElements";

const PhaseSideBarComponents = ({page1,page2,page3,page4,page5}) => {
  const [selected, setSelected] = useState(true);

  const Clickit = ()=>{
    setSelected(!selected);
  }
  useEffect(() => {
    Clickit()
  }, []);

    return(
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
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ? 
                    <Contentt>
                        <BusinessSideBarImage img={PhaseAllImage.image1}>
                            <BusinessSideBarContent page={page1} to="/Phase/Phase 1">Phase 1</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image2}>
                            <BusinessSideBarContent page={page2} to="/Phase/Phase 2">Phase 2</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image3}>
                            <BusinessSideBarContent page={page3} to="/Phase/Phase 3">Phase 3</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image4}>
                            <BusinessSideBarContent page={page4} to="/Phase/Phase 3a">Phase 3a</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image5}>
                            <BusinessSideBarContent page={page5} to="/Phase/PT Ceria Cobalt Indotama">PT Ceria Cobalt Indotama</BusinessSideBarContent>
                        </BusinessSideBarImage>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <BusinessSideBarImage img={PhaseAllImage.image1}>
                            <BusinessSideBarContent page={page1} to="/Phase/Phase 1">Phase 1</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image2}>
                            <BusinessSideBarContent page={page2} to="/Phase/Phase 2">Phase 2</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image3}>
                            <BusinessSideBarContent page={page3} to="/Phase/Phase 3">Phase 3</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image4}>
                            <BusinessSideBarContent page={page4} to="/Phase/Phase 3a">Phase 3a</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={PhaseAllImage.image5}>
                            <BusinessSideBarContent page={page5} to="/Phase/PT ceria Cobalt Indotama">PT Ceria Cobalt Indotama</BusinessSideBarContent>
                        </BusinessSideBarImage>
                    </Contentt>
                    </Changed>}
                    </DropDown>
            </BusinessSideBar>
        </>
    )
};
export default PhaseSideBarComponents;

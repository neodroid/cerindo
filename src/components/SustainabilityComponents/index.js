import React,{ useState, useEffect } from "react";
import {
    AboutSideBar,
    AboutSideBarContent,
    ArrowDiv,
    ArrowDownLang,
    TextButton,
    DropDown,
    Dropbtn,
    Contentt,
    Changed
} from "../AboutUsComponents/AboutUsElements";

const SustainabilitySideBarComponents = ({page1,page2,page3,page4,page5,page6,page7}) => {
    const [selected, setSelected] = useState(true);

    const Clickit = ()=>{
        setSelected(!selected);
    }

    useEffect(()=>{
        Clickit()
    },[])
    return(
        <>
            <AboutSideBar>
                <DropDown tabIndex={-1}>
                    <Dropbtn onClick={Clickit}>
                        <TextButton page={page1}>QHSE</TextButton>
                        <TextButton page={page2}>Community Activities</TextButton>
                        <TextButton page={page3}>Reports</TextButton>
                        <TextButton page={page4}>Awards</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/QHSE">
                            QHSE
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Community-Activities">
                            Community Activities
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Reports">
                            Reports
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Awards">
                            Awards
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/QHSE">
                        QHSE
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Community-Activities">
                        Community Activities
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Reports">
                        Reports
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Awards">
                            Awards
                        </AboutSideBarContent>
                    </Contentt>
                    </Changed>
                    }
                </DropDown>
            </AboutSideBar>
        </>
    )
}

export default SustainabilitySideBarComponents;
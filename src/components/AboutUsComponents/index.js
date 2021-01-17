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
} from "./AboutUsElements";

const AboutSideBarComponents = ({page1,page2,page3,page4,page5,page6,page7}) => {
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
                        <TextButton page={page1}>Mission, Vision and Value</TextButton>
                        <TextButton page={page2}>Company Subsidiary</TextButton>
                        <TextButton page={page3}>Board of Director</TextButton>
                        <TextButton page={page4}>Organization Structure</TextButton>
                        <TextButton page={page5}>History and Milestone</TextButton>
                        <TextButton page={page6}>Concession Area</TextButton>
                        <TextButton page={page7}>License and Award</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/Mission-Vision">
                            Mission, Vision and Value
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Subsidiary">
                            Company Subsidiary
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Board-of-Director">
                            Board of Director
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Organization-Structure">
                            Organization Structure
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/History-Milestone">
                            History and Milestone
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/Concession-Area">
                            Concession Area
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/License-And-Award">
                            License and Award
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/Mission-Vision">
                            Mission, Vision and Value
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Subsidiary">
                            Company Subsidiary
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Board-of-Director">
                            Board of Director
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Organization-Structure">
                            Organization Structure
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/History-Milestone">
                            History and Milestone
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/Concession-Area">
                            Concession Area
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/License-And-Award">
                            License and Award
                        </AboutSideBarContent>
                    </Contentt>
                    </Changed>
                    }
                </DropDown>
            </AboutSideBar>
        </>
    )
}

export default AboutSideBarComponents;
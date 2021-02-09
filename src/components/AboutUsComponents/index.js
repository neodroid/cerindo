import React,{ useState, useEffect, useContext } from "react";
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
import { langContext } from '../../langContext';
import { AboutUsSidebar } from './AboutUsLang';
import { AboutUsIntl } from '../Data/AboutusData/AboutUsData';

const AboutSideBarComponents = ({page1,page2,page3,page4,page5,page6,page7,page8,page9}) => {
    const { language } = useContext(langContext);

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
                        <TextButton page={page2}>Commitment</TextButton>
                        <TextButton page={page3}>Company's Subsidiary</TextButton>
                        <TextButton page={page4}>Board of Director</TextButton>
                        <TextButton page={page5}>Organization Structure</TextButton>
                        <TextButton page={page6}>History and Milestone</TextButton>
                        <TextButton page={page7}>Licenses and Concession Area</TextButton>
                        <TextButton page={page8}>Press Release</TextButton>
                        <TextButton page={page9}>Gallery</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/Mission-Vision">
                            {AboutUsSidebar(AboutUsIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Commitment">
                            {AboutUsSidebar(AboutUsIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Subsidiary">
                            {AboutUsSidebar(AboutUsIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Board-of-Director">
                            {AboutUsSidebar(AboutUsIntl, language, 3)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/Organization-Structure">
                            {AboutUsSidebar(AboutUsIntl, language, 4)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/History-Milestone">
                            {AboutUsSidebar(AboutUsIntl, language, 5)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/Licenses-Concession">
                            {AboutUsSidebar(AboutUsIntl, language, 6)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page8} to="/Press-Release">
                            {AboutUsSidebar(AboutUsIntl, language, 7)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page9} to="/Gallery">
                            {AboutUsSidebar(AboutUsIntl, language, 8)}
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/Mission-Vision">
                            {AboutUsSidebar(AboutUsIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Commitment">
                            {AboutUsSidebar(AboutUsIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Subsidiary">
                            {AboutUsSidebar(AboutUsIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Board-of-Director">
                            {AboutUsSidebar(AboutUsIntl, language, 3)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/Organization-Structure">
                            {AboutUsSidebar(AboutUsIntl, language, 4)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/History-Milestone">
                            {AboutUsSidebar(AboutUsIntl, language, 5)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/Licenses-Concession">
                            {AboutUsSidebar(AboutUsIntl, language, 6)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page8} to="/Press-Release">
                            {AboutUsSidebar(AboutUsIntl, language, 7)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page9} to="/Gallery">
                            {AboutUsSidebar(AboutUsIntl, language, 8)}
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
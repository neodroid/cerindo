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
} from "../AboutUsComponents/AboutUsElements";
import { langContext } from '../../langContext';
import { SustainabilitySideBarIntl } from '../Data/SustainabilityData/SustainabilityData';
import { SustainabilitySidebar } from './SustainabilityLang';

const SustainabilitySideBarComponents = ({page1,page2,page3,page4,page5,page6,page7}) => {
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
                        <TextButton page={page1}>{SustainabilitySidebar(SustainabilitySideBarIntl, language, 0)}</TextButton>
                        <TextButton page={page2}>{SustainabilitySidebar(SustainabilitySideBarIntl, language, 1)}</TextButton>
                        <TextButton page={page3}>{SustainabilitySidebar(SustainabilitySideBarIntl, language, 2)}</TextButton>
                        <TextButton page={page4}>{SustainabilitySidebar(SustainabilitySideBarIntl, language, 3)}</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/QHSE">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Community-Activities">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Reports">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Awards">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 3)}
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/QHSE">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Community-Activities">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Reports">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Awards">
                            {SustainabilitySidebar(SustainabilitySideBarIntl, language, 3)}
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
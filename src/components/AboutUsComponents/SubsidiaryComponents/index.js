import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import {SubsidaryConstruct, PhasexpData,SubsidiaryexpData} from "../../Data/AboutusData/SubsidiaryDatas";
import { FaAngleRight } from "react-icons/fa";
import {
    SubsidiaryContent,
    Phasexp,
    PhaseWrited,
    PhaseWritedApart,
    SubsidiaryExp
} from "./SubsidiaryElements";

const SubsidiaryComponents = () => {
    return(
        <>
        <Aboutstyle>
            <AboutSideBar>
                <AboutSideBarContent to="/Mission-Vision">Mission, Vision and Value</AboutSideBarContent>
                <AboutSideBarContent page to="/Subsidiary">Company Subsidiary</AboutSideBarContent>
                <AboutSideBarContent to="/Board-of-Director">Board of Director</AboutSideBarContent>
                <AboutSideBarContent to="/Organization-Structure">Organization Structure</AboutSideBarContent>
                <AboutSideBarContent to="/History-Milestone">History and Milestone</AboutSideBarContent>
                <AboutSideBarContent to="/Concession-Area">Concession Area</AboutSideBarContent>
                <AboutSideBarContent to="/License-And-Award">License and Award</AboutSideBarContent>
            </AboutSideBar>
            <AboutMain>
                <SubsidiaryContent>
                <img src={SubsidaryConstruct.img} width={`700px`} />
                    {PhasexpData.map((data,idx)=>{
                        return(
                            <Phasexp key={idx}>
                                <PhaseWrited>
                                    <PhaseWritedApart>{data.title}</PhaseWritedApart>
                                    <PhaseWritedApart simbol><FaAngleRight/></PhaseWritedApart>
                                </PhaseWrited>
                            </Phasexp>
                        )
                    })}
                    {SubsidiaryexpData.map((data,idx)=>{
                        return(
                        <SubsidiaryExp key={idx}>{data.content}</SubsidiaryExp>
                    )})}
                </SubsidiaryContent>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default SubsidiaryComponents;
import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import {OrgWrapped} from "./OrganizationElements";
import {OrgData} from "../../Data/AboutusData/OrganizationDatas"

const OrganizationComponents = () => {
    return(
        <>
        <Aboutstyle>
            <AboutSideBar>
                <AboutSideBarContent to="/Mission-Vision">Mission, Vision and Value</AboutSideBarContent>
                <AboutSideBarContent to="/Subsidiary">Company Subsidiary</AboutSideBarContent>
                <AboutSideBarContent to="/Board-of-Director">Board of Director</AboutSideBarContent>
                <AboutSideBarContent page to="/Organization-Structure">Organization Structure</AboutSideBarContent>
                <AboutSideBarContent to="/History-Milestone">History and Milestone</AboutSideBarContent>
                <AboutSideBarContent to="/Concession-Area">Concession Area</AboutSideBarContent>
                <AboutSideBarContent to="/License-And-Award">License and Award</AboutSideBarContent>
            </AboutSideBar>
            <AboutMain>
                <OrgWrapped>
                    <img src={OrgData.img} alt={OrgData.img} width={`782px`}/>
                </OrgWrapped>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default OrganizationComponents;
import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import arrowBagan from "../../../images/arrowBagan.png"
import {
    SubsidiaryContent,
    BaganContent,
    BaganBox,
    BaganApart
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
                    <BaganContent img={arrowBagan}>
                        <BaganBox bgcolor={`#FBFF47`} height={64}>Ceria Holding Company</BaganBox>
                        <BaganApart>
                            <BaganBox bgcolor={`#20A1E4`}>Mining Co.</BaganBox>
                            <BaganBox bgcolor={`#20A1E4`}>PT. Ferrox Ceria Indonesia</BaganBox>
                        </BaganApart>
                        <BaganApart>
                            <BaganBox bgcolor={`#D2222B`} phase>RKEF Line 1:<br/>Phase 1</BaganBox>
                            <BaganBox bgcolor={`#D2222B`} phase>RKEF Line 2:<br/>Phase 2</BaganBox>
                            <BaganBox bgcolor={`#D2222B`} phase>RKEF Line 3 & 4:<br/>Phase 3</BaganBox>
                            <BaganBox bgcolor={`#D2222B`} phase>RKEF Line 5 & 6:<br/>Phase 3a</BaganBox>
                            <BaganBox bgcolor={`#D2222B`} phase>HPAL:<br/>PT Ceria Cobalt Indotama</BaganBox>
                        </BaganApart>
                    </BaganContent>
                </SubsidiaryContent>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default SubsidiaryComponents;
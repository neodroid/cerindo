import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import {LicenseData,AwardData} from "../../Data/AboutusData/LicenseDatas";
import {
    LicWrapped,
    LicContent,
    LicBoxWrited,
    AwardContent,
    Figured
} from "./LicenseElements";

const LicenseComponents = () => {
    return(
        <>
        <Aboutstyle>
            <AboutSideBar>
                <AboutSideBarContent to="/Mission-Vision">Mission, Vision and Value</AboutSideBarContent>
                <AboutSideBarContent to="/Subsidiary">Company Subsidiary</AboutSideBarContent>
                <AboutSideBarContent to="/Board-of-Director">Board of Director</AboutSideBarContent>
                <AboutSideBarContent to="/Organization-Structure">Organization Structure</AboutSideBarContent>
                <AboutSideBarContent to="/History-Milestone">History and Milestone</AboutSideBarContent>
                <AboutSideBarContent to="/Concession-Area">Concession Area</AboutSideBarContent>
                <AboutSideBarContent page to="/License-And-Award">License and Award</AboutSideBarContent>
            </AboutSideBar>
            <AboutMain>
                <LicWrapped>
                    {LicenseData.map((data,idx)=>{
                        if( idx%2 == 0){
                        return(
                            <LicContent wrap key={idx}>
                                <LicContent>
                                    <LicContent wrap>
                                    <LicBoxWrited title>{data.title}</LicBoxWrited>
                                    <LicBoxWrited>{data.content}</LicBoxWrited>
                                    </LicContent>
                                    <img src={data.image} width={`332px`}/>
                                </LicContent>
                            </LicContent>
                        )} else{
                            return(
                                <LicContent wrap key={idx}>
                                <LicContent>
                                    <img src={data.image} width={`332px`}/>
                                    <LicContent wrap>
                                    <LicBoxWrited title>{data.title}</LicBoxWrited>
                                    <LicBoxWrited>{data.content}</LicBoxWrited>
                                    </LicContent>
                                </LicContent>
                            </LicContent>
                            )
                        }
                    })}
                    <AwardContent>
                        <h2>Awards</h2>
                        {AwardData.map((data,idx)=>{
                                return(
                                    <Figured key={idx}>
                                        <img src={data.image} alt={data.image}/>
                                        <figcaption>{data.desc}</figcaption>
                                    </Figured>
                                )
                        })}
                    </AwardContent>
                </LicWrapped>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default LicenseComponents;
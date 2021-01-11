import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import misimage from "../../../images/image 20.png";
import visimage from "../../../images/sEApBUS4fIk.png";
import {ValueData,VismisData} from "../../Data/AboutusData/VismisDatas";
import {
    VismisContent,
    VismisWrited,
    VismisApart,
    VismisImagePart,
    ValueContent,
    ValueWrite,
    Valuexp,
    Valuexpwrited,
    Angle
} from "./VismisElements";

const VismisComponents = () => {
    return(
        <>
        <Aboutstyle>
            <AboutSideBar>
                <AboutSideBarContent page to="/Mission-Vision">Mission, Vision and Value</AboutSideBarContent>
                <AboutSideBarContent to="/Subsidiary">Company Subsidiary</AboutSideBarContent>
                <AboutSideBarContent to="/Board-of-Director">Board of Director</AboutSideBarContent>
                <AboutSideBarContent to="/Organization-Structure">Organization Structure</AboutSideBarContent>
                <AboutSideBarContent to="/History-Milestone">History and Milestone</AboutSideBarContent>
                <AboutSideBarContent to="/Concession-Area">Concession Area</AboutSideBarContent>
                <AboutSideBarContent to="/License-And-Award">License and Award</AboutSideBarContent>
            </AboutSideBar>
            <AboutMain>
                <VismisContent>
                    <VismisApart writed>
                        <VismisWrited title>Mission</VismisWrited>
                        <VismisWrited>{VismisData.misi}</VismisWrited>
                    </VismisApart>
                    <VismisApart>
                        <VismisImagePart>
                            <img src={misimage}/>
                        </VismisImagePart>
                    </VismisApart>
                </VismisContent>
                <VismisContent>
                    <VismisApart>
                        <VismisImagePart misi>
                            <img src={visimage}/>
                        </VismisImagePart>
                    </VismisApart>
                    <VismisApart writed>
                        <VismisWrited title vision>Vision</VismisWrited>
                        <VismisWrited vision>{VismisData.visi}</VismisWrited>
                    </VismisApart>
                </VismisContent>
                <ValueContent>
                    <h1>Value</h1>
                    <Angle>
                    {ValueData.map((data)=>{
                            return(
                            <div>
                                <ValueWrite>{data.valueUp}</ValueWrite>
                                <ValueWrite choose>{data.valueChoose}</ValueWrite>
                                <ValueWrite>{data.valueDown}</ValueWrite>
                                <Valuexp>
                                    <Valuexpwrited title>{data.title}</Valuexpwrited>
                                    <Valuexpwrited>{data.desc}</Valuexpwrited>
                                </Valuexp>
                            </div>
                        )})}
                    </Angle>
                </ValueContent>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default VismisComponents;
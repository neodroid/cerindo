import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import {BODContentData} from "../../Data/AboutusData/BODDatas";
import Masonry from 'react-masonry-component';
import {
    BodGridded,
    Bodwrapped,
    Bodbox,
    BodBoxContent,
    BodBoxIntro,
    BodBoxIntroTitle,
    BodDescriptionContent
} from "./BODElements";

const BODComponents = () => {
    return(
        <>
        <Aboutstyle>
            <AboutSideBar>
                <AboutSideBarContent to="/Mission-Vision">Mission, Vision and Value</AboutSideBarContent>
                <AboutSideBarContent to="/Subsidiary">Company Subsidiary</AboutSideBarContent>
                <AboutSideBarContent page to="/Board-of-Director">Board of Director</AboutSideBarContent>
                <AboutSideBarContent to="/Organization-Structure">Organization Structure</AboutSideBarContent>
                <AboutSideBarContent to="/History-Milestone">History and Milestone</AboutSideBarContent>
                <AboutSideBarContent to="/Concession-Area">Concession Area</AboutSideBarContent>
                <AboutSideBarContent to="/License-And-Award">License and Award</AboutSideBarContent>
            </AboutSideBar>
            <AboutMain>
                <Bodwrapped>
                    <Masonry>
                        {BODContentData.map((data,idx)=>{
                            return(
                                <Bodbox key={idx}>
                                    <BodBoxContent>
                                        <BodBoxIntro>
                                            <img src={data.image} width={`83px`} height={`125px`}/>
                                            <div>
                                            <BodBoxIntroTitle title>{data.name}</BodBoxIntroTitle>
                                            <BodBoxIntroTitle>{data.position}</BodBoxIntroTitle>
                                            </div>
                                        </BodBoxIntro>
                                        <BodDescriptionContent>{data.description}</BodDescriptionContent>
                                    </BodBoxContent>
                                </Bodbox>
                            )
                        })}
                    </Masonry>
                </Bodwrapped>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default BODComponents;
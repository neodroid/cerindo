import React from "react";
import {Aboutstyle,AboutSideBar,AboutMain,AboutSideBarContent} from "../AboutUsElements";
import misimage from "../../../images/image 20.png";
import visimage from "../../../images/sEApBUS4fIk.png";
import {ValueData} from "../../Data/AboutusData/VismisDatas";
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
                        <VismisWrited>To produce quality nickel and cobalt products by maximizing value through efficient industry best practices.</VismisWrited>
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
                        <VismisWrited vision>To become a world class nickel and cobalt company through efficient and sustainable business practices.</VismisWrited>
                    </VismisApart>
                </VismisContent>
                <ValueContent>
                    <h1>Value</h1>
                    <Angle>
                        <div>
                            <ValueWrite choose>
                                C.
                            </ValueWrite>
                            <ValueWrite>
                            E.R.I.A.
                            </ValueWrite>
                            <Valuexp>
                                <Valuexpwrited title>{ValueData[0].title}</Valuexpwrited>
                                <Valuexpwrited>{ValueData[0].desc}</Valuexpwrited>
                            </Valuexp>
                        </div>
                        <div>
                            <ValueWrite>
                            C.
                            </ValueWrite>
                            <ValueWrite choose>
                                E.
                            </ValueWrite>
                            <ValueWrite>
                            R.I.A.
                            </ValueWrite>
                            <Valuexp>
                                <Valuexpwrited title>{ValueData[1].title}</Valuexpwrited>
                                <Valuexpwrited>{ValueData[1].desc}</Valuexpwrited>
                            </Valuexp>
                        </div>
                        <div>
                            <ValueWrite>
                            C.E.
                            </ValueWrite>
                            <ValueWrite choose>
                                R.
                            </ValueWrite>
                            <ValueWrite>
                            I.A.
                            </ValueWrite>
                            <Valuexp>
                                <Valuexpwrited title>{ValueData[2].title}</Valuexpwrited>
                                <Valuexpwrited>{ValueData[2].desc}</Valuexpwrited>
                            </Valuexp>
                        </div>
                        <div>
                            <ValueWrite>
                            C.E.R.
                            </ValueWrite>
                            <ValueWrite choose>
                                I.
                            </ValueWrite>
                            <ValueWrite>
                            A.
                            </ValueWrite>
                            <Valuexp>
                                <Valuexpwrited title>{ValueData[3].title}</Valuexpwrited>
                                <Valuexpwrited>{ValueData[3].desc}</Valuexpwrited>
                            </Valuexp>
                        </div>
                        <div>
                            <ValueWrite>
                            C.E.R.I.
                            </ValueWrite>
                            <ValueWrite choose>
                                A.
                            </ValueWrite>
                            <Valuexp>
                                <Valuexpwrited title>{ValueData[4].title}</Valuexpwrited>
                                <Valuexpwrited>{ValueData[4].desc}</Valuexpwrited>
                            </Valuexp>
                        </div>
                    </Angle>
                </ValueContent>
            </AboutMain>
        </Aboutstyle>
        </>
    )
};
export default VismisComponents;
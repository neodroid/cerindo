import React, { useState, useEffect } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { BODContentData } from "../../Data/AboutusData/BODDatas";
import { aboutUsService } from "../../../service/Aboutus";
import Masonry from "react-masonry-component";
import {
  BodGridded,
  Bodwrapped,
  Bodbox,
  BodBoxContent,
  BodBoxIntro,
  BodBoxIntroTitle,
  BodDescriptionContent,
} from "./BODElements";

const BODComponents = () => {
  const [BOD, setBOD] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setBOD(data.boardOfDirectors);
    };
    fetchData();
  }, []);
  console.log(BOD);
  if (BOD.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBar>
          <AboutSideBarContent to="/Mission-Vision">
            Mission, Vision and Value
          </AboutSideBarContent>
          <AboutSideBarContent to="/Subsidiary">
            Company Subsidiary
          </AboutSideBarContent>
          <AboutSideBarContent page to="/Board-of-Director">
            Board of Director
          </AboutSideBarContent>
          <AboutSideBarContent to="/Organization-Structure">
            Organization Structure
          </AboutSideBarContent>
          <AboutSideBarContent to="/History-Milestone">
            History and Milestone
          </AboutSideBarContent>
          <AboutSideBarContent to="/Concession-Area">
            Concession Area
          </AboutSideBarContent>
          <AboutSideBarContent to="/License-And-Award">
            License and Award
          </AboutSideBarContent>
        </AboutSideBar>
        <AboutMain>
          <Bodwrapped>
            <Masonry>
              {BOD.map((data, idx) => {
                return (
                  <Bodbox key={idx}>
                    <BodBoxContent>
                      <BodBoxIntro>
                        <img
                          src={data.Picture.url}
                          width={`83px`}
                          height={`125px`}
                        />
                        <div>
                          <BodBoxIntroTitle title>
                            {data.name_of_director}
                          </BodBoxIntroTitle>
                          <BodBoxIntroTitle>{data.position}</BodBoxIntroTitle>
                        </div>
                      </BodBoxIntro>
                      <BodDescriptionContent>
                        {data.description_en}
                      </BodDescriptionContent>
                    </BodBoxContent>
                  </Bodbox>
                );
              })}
            </Masonry>
          </Bodwrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default BODComponents;

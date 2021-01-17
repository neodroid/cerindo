import React, { useState, useEffect, useContext } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import { BODContentData } from "../../Data/AboutusData/BODDatas";
import { aboutUsService } from "../../../service/Aboutus";
import AboutSideBarComponents from "../index";
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

import { langContext } from "../../../langContext";
import { BODlang } from "./BODlang"


const BODComponents = () => {
  const {language} = useContext(langContext);

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
        <AboutSideBarComponents page3={true}/>
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
                        {BODlang(data, language)}
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

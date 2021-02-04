import React, { useState, useEffect, useContext } from "react";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import { BODContentData } from "../../Data/AboutusData/BODDatas";
import { aboutUsService } from "../../../service/Aboutus";
import AboutSideBarComponents from "../index";
import {
  Bodwrapped,
  Bodbox,
  BodBoxContent,
  BodBoxIntro,
  BodBoxIntroTitle,
  BodDescriptionContent,
  Masonries,
  TheKing,
  ContentDiv,
  KingBox,
  DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  BodGrid,
} from "./BODElements";

import { langContext } from "../../../langContext";
import { BODlang } from "./BODlang";

const BODComponents = () => {
  const { language } = useContext(langContext);
  const [BOD, setBOD] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      console.log(data);
      setBOD(data.boardOfDirectors);
    };
    fetchData();
  }, []);

  if (BOD.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page4={true} />
        <AboutMain>
          <Bodwrapped>
            <TheKing>
              {BOD.listBoardOfDirectors.map((data, idx) => {
                if (idx == 0) {
                  return (
                    <KingBox key={idx}>
                      <BodBoxContent>
                        <BodBoxIntro>
                          <img src={data.picture.url} width={`210px`} />
                          <div>
                            <BodBoxIntroTitle title>
                              {data.name}
                            </BodBoxIntroTitle>
                            <BodBoxIntroTitle>{data.position}</BodBoxIntroTitle>
                          </div>
                        </BodBoxIntro>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                          <DropDownContent>
                            <BodDescriptionContent>
                              {BODlang(data, language)}
                            </BodDescriptionContent>
                          </DropDownContent>
                          <Dropbtn>
                            <ContentDiv>Read More</ContentDiv>
                            <ContentDiv2>Read Less</ContentDiv2>
                          </Dropbtn>
                        </DropDown>
                      </BodBoxContent>
                    </KingBox>
                  );
                }
              })}
            </TheKing>
            <BodGrid>
              {BOD.listBoardOfDirectors.map((data, idx) => {
                if (idx > 0) {
                  return (
                    <Bodbox key={idx}>
                      <BodBoxContent>
                        <BodBoxIntro>
                          <img src={data.picture.url} width={`149px`} />
                          <div>
                            <BodBoxIntroTitle title>
                              {data.name}
                            </BodBoxIntroTitle>
                            <BodBoxIntroTitle>{data.position}</BodBoxIntroTitle>
                          </div>
                        </BodBoxIntro>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                          <DropDownContent>
                            <BodDescriptionContent>
                              {BODlang(data, language)}
                            </BodDescriptionContent>
                          </DropDownContent>
                          <Dropbtn>
                            <ContentDiv>Read More</ContentDiv>
                            <ContentDiv2>Read Less</ContentDiv2>
                          </Dropbtn>
                        </DropDown>
                      </BodBoxContent>
                    </Bodbox>
                  );
                }
              })}
            </BodGrid>
          </Bodwrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default BODComponents;

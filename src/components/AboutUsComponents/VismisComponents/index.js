import React, { useState, useEffect, useContext } from "react";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { aboutUsService } from "../../../service/Aboutus";
import {
  VisionTitle,
  MissionTitle,
  ValueTitle,
} from "../../Data/AboutusData/VismisDatas";

import {
  VisMisTitleLang,
  VisionDescriptionLang,
  MissionDescriptionLang,
  ValueTitleLang,
  ValueDescriptionLang,
} from "./VismisLang";
import { langContext } from "../../../langContext";
import {
  VismisContent,
  VismisWrited,
  VismisApart,
  VismisImagePart,
  ValueContent,
  ValueWrite,
  ValuePartexp,
  Valuexp,
  ValuesWrited,
  FlexValue,
  Image,
  ValueApart,
  ValuesWritedTitle
} from "./VismisElements";

const VismisComponents = () => {
  const [MVV, setMVV] = useState([]);
  const { language } = useContext(langContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setMVV(data.MVV);
    };
    fetchData();
  }, []);

  if (MVV.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page1={true} />
        <AboutMain>
          <VismisContent>
            <VismisApart>
              <VismisWrited title>
                {VisMisTitleLang(VisionTitle, language)}
              </VismisWrited>
                <VismisWrited>
                  {VisionDescriptionLang(MVV, language)}
                </VismisWrited>
              <VismisWrited title misi>
                {VisMisTitleLang(MissionTitle, language)}
              </VismisWrited>
                <VismisWrited>
                  {MissionDescriptionLang(MVV, language)}
                </VismisWrited>
            </VismisApart>
            <VismisApart>
              <img width="245px" src={MVV.image.url}/>
            </VismisApart>
          </VismisContent>
          <ValueContent>
            <h1>{VisMisTitleLang(ValueTitle, language)}</h1>
            <ValueWrite choose>C E R I A</ValueWrite>
            {MVV.ceriaValue.map((data, idx) => {
              console.log(ValueTitleLang(data, language).props.children[0])
              return (
                <FlexValue>
                  <ValueApart image>
                    <Image src={data.logo.url} />
                  </ValueApart>
                  <ValueApart>
                    <ValuePartexp key={idx}>
                      <div width="100%">
                        <ValuesWritedTitle choosen>
                          {ValueTitleLang(data, language).props.children[0]}
                        </ValuesWritedTitle>
                        <ValuesWritedTitle>
                          {ValueTitleLang(data, language).props.children.slice(1)}
                        </ValuesWritedTitle>
                      </div>
                      <ValuesWrited>
                        {ValueDescriptionLang(data, language)}
                      </ValuesWrited>
                    </ValuePartexp>
                  </ValueApart>
                </FlexValue>
              );
            })}
          </ValueContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default VismisComponents;

/* 
<Angle>
              {ValueData.map((data) => {
                return (
                  <div>
                    <ValueWrite>{data.valueUp}</ValueWrite>
                    <ValueWrite choose>{data.valueChoose}</ValueWrite>
                    <ValueWrite>{data.valueDown}</ValueWrite>
                    <Valuexp>
                      <Valuexpwrited title>{data.title}</Valuexpwrited>
                      <Valuexpwrited>{data.desc}</Valuexpwrited>
                    </Valuexp>
                  </div>
                );
              })}
            </Angle>
*/

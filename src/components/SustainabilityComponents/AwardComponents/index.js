import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import ReactMarkdown from "react-markdown";
import {
  AwardsesContent,
  ContentAward,
  ImageAward,
  Containerrs,
  DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  ContentDrop,
  ButtonCloser,
} from "./AwardElements";
import { BoxContainer } from "../../CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents/NewsContentElements";
import { langContext } from "../../../langContext";
import {
  AwardContentLangTitle,
  AwardContentLangBody,
  AwardContentLangDescription,
  AwardContentLangName,
} from "./AwardLang";

const AwardComponents = () => {
  const { language } = useContext(langContext);
  const [AwardContent, setAwardContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.Awards;
      setAwardContent(data);
    };
    fetchData();
  }, []);

  if (AwardContent.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page4={true} />
        <AboutMain>
          <BusinessWrited title>
            {AwardContentLangTitle(AwardContent, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                AwardContentLangBody(AwardContent, language).props.children
              }
            />
          </BusinessWrited>
          <AwardsesContent>
            {AwardContent.awards_list.map((data, idx) => {
              return (
                <ContentAward key={idx}>
                  <BoxContainer>{data.date}</BoxContainer>
                  <BoxContainer titlee>
                    {AwardContentLangName(data, language)}
                  </BoxContainer>
                  <Containerrs>
                    <DropDown role="button" tabIndex={-1} key={idx}>
                      <Dropbtn>
                        <ImageAward src={data.image.url} />
                      </Dropbtn>
                      <DropDownContent>
                        <ContentDiv2>
                          <ButtonCloser />
                        </ContentDiv2>
                        <ContentDrop>
                          <img src={data.image.url} width="100%" />
                        </ContentDrop>
                      </DropDownContent>
                    </DropDown>
                    <BoxContainer>
                      <ReactMarkdown
                        children={
                          AwardContentLangDescription(data, language).props
                            .children
                        }
                      />
                    </BoxContainer>
                  </Containerrs>
                </ContentAward>
              );
            })}
          </AwardsesContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default AwardComponents;

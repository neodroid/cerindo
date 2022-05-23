import React, { useState, useEffect, useContext } from "react";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import { communityService } from "../../../service/Community";
import NewsGallerySidebarComponents from "../index";
import { Reading } from "../../Data/SustainabilityData/ActivityDatas";
import {
  ActivityBox,
  ActivityContainer,
  BoxContainer,
  ActivityImage,
  Activitybtn,
  BoxWrapper,
  ActivityContainerPart,
  ActivityTitle,
} from "./ActivityElements";
import { langContext } from "../../../langContext";
import {
  ActivityLangTitle,
  ActivityLangBody,
  ActivityLangRead,
} from "./ActivityLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const ActivityComponents = () => {
  const { language } = useContext(langContext);
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await communityService.getListCommunity();
      const data = response.data;
      setActivity(data);
    };
    fetchData();
  }, []);

  if (activity.length === 0) return null;
  const sortedActivities = activity.sort((a, b) => {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;
  });
  return (
    <>
      <Aboutstyle>
        <NewsGallerySidebarComponents page2={true} />
        <AboutMain>
          <ActivityTitle>Community Activities</ActivityTitle>
          <ActivityContainer>
            {sortedActivities.map((data, idx) => {
              return (
                <ActivityBox key={idx}>
                  <BoxWrapper>
                    <ActivityContainerPart>
                      <ActivityImage src={data.image.url} />
                    </ActivityContainerPart>
                    <ActivityContainerPart wrt>
                      <BoxContainer titlee>
                        {ActivityLangTitle(data, language)}
                      </BoxContainer>
                      <BoxContainer>
                        <ReactMarkdown
                          children={
                            ActivityLangBody(data, language).props.children
                          }
                          plugins={[[gfm, { singleTilde: false }]]}
                          allowDangerousHtml={true}
                        />
                      </BoxContainer>
                    </ActivityContainerPart>
                    <ActivityContainerPart btn>
                      <Activitybtn to={`/Community-Activity/${data._id}`}>
                        {ActivityLangRead(Reading, language)}
                      </Activitybtn>
                    </ActivityContainerPart>
                  </BoxWrapper>
                </ActivityBox>
              );
            })}
          </ActivityContainer>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default ActivityComponents;

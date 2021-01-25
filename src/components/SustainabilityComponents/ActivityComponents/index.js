import React, { useState, useEffect, useContext } from "react";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import { NewsData } from "../../Data/News";
import { communityService } from "../../../service/Community";
import BusinessSideBarComponents from "../index";
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
import { ActivityLangTitle, ActivityLangBody } from "./ActivityLang";

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
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page2={true} />
        <AboutMain>
          <ActivityTitle>Community Activities</ActivityTitle>
          <ActivityContainer>
            {activity.map((data, idx) => {
              return (
                <ActivityBox key={idx}>
                  <BoxWrapper>
                    <ActivityContainerPart>
                      <ActivityImage src={data.image.url} />
                    </ActivityContainerPart>
                    <ActivityContainerPart wrt>
                      <BoxContainer titlee>{ActivityLangTitle(data, language)}</BoxContainer>
                      <BoxContainer>
                        {ActivityLangBody(data, language)}
                      </BoxContainer>
                    </ActivityContainerPart>
                    <ActivityContainerPart btn>
                      <Activitybtn to={`/Activityscontainer/${data._id}`}>
                        Continue Reading
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

import React, { useState, useEffect } from "react";
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

const ActivityComponents = () => {
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
                      <BoxContainer titlee>{data.title_en}</BoxContainer>
                      <BoxContainer>
                        {`${data.news_en.substring(0, 100)}...`}
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

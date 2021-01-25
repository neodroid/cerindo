import React from "react";
import {
  Aboutstyle,
  AboutMain,
} from "../../AboutUsComponents/AboutUsElements";
import {NewsData} from "../../Data/News";
import BusinessSideBarComponents from "../index";
import {ActivityBox,
    ActivityContainer,
    BoxContainer,
    ActivityImage,
    Activitybtn,
    BoxWrapper,
    ActivityContainerPart,
    ActivityTitle
} from "./ActivityElements";

const ActivityComponents = () => {
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page2={true} />
        <AboutMain>
            <ActivityTitle>
                Community Activities
            </ActivityTitle>
            <ActivityContainer>
                {NewsData.map((data,idx)=>{
                    return(
                    <ActivityBox key={idx}>
                        <BoxWrapper>
                            <ActivityContainerPart><ActivityImage src={data.image} /></ActivityContainerPart>
                            <ActivityContainerPart wrt>
                            <BoxContainer titlee >{data.title}</BoxContainer>
                            <BoxContainer>{data.description}</BoxContainer>
                            </ActivityContainerPart>
                            <ActivityContainerPart btn><Activitybtn to = {`/Activityscontainer/${data.title}`}>Continue Reading</Activitybtn></ActivityContainerPart>
                        </BoxWrapper>
                    </ActivityBox>
                    )
                })}
            </ActivityContainer>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default ActivityComponents;

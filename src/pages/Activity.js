import React from "react";
import { ActivityHead } from "../components/Data/SustainabilityData/ActivityDatas";
import Banner from "../components/Banner";
import ActivityComponents from "../components/SustainabilityComponents/ActivityComponents";

const Activity = () => {
  return (
    <>
    {ActivityHead.map((data,idx)=>{
        return(
      <Banner img={data.img} texted={true} key={idx}/>
    )})}
      <ActivityComponents />
    </>
  );
};

export default Activity;
import React from "react";
import { AwardHead } from "../components/Data/SustainabilityData/AwardDatas";
import Banner from "../components/Banner";
import AwardComponents from "../components/SustainabilityComponents/AwardComponents";

const Award = () => {
  return (
    <>
    {AwardHead.map((data,idx)=>{
        return(
      <Banner img={data.img} texted={true} key={idx}/>
    )})}
      <AwardComponents />
    </>
  );
};

export default Award;
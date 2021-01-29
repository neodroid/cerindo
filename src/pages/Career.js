import React from "react";
import Banner from "../components/Banner";
import {CareerHead} from "../components/Data/CareerData";
import CareerComponents from "../components/CareerComponents";

const Career = () => {
  return (
    <>
      <Banner 
      lightText={true}
      texted={true}
      place="Career"
      />
      <CareerComponents />
    </>
  );
};

export default Career;
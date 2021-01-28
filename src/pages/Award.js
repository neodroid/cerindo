import React, { useState, useEffect } from "react";
import { sustainService } from "../service/Sustainability";
import { AwardHead } from "../components/Data/SustainabilityData/AwardDatas";
import Banner from "../components/Banner";
import AwardComponents from "../components/SustainabilityComponents/AwardComponents";

const Award = () => {
  const [award, setAward] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.Awards;
      setAward(data);
    };
    fetchData();
  }, []);

  if (award.length === 0) return null;
  return (
    <>
      {award.banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} place="Global Sustainability"/>;
      })}
      <AwardComponents />
    </>
  );
};

export default Award;

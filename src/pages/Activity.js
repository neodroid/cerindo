import React, { useState, useEffect } from "react";
import { sustainService } from "../service/Sustainability";
import { ActivityHead } from "../components/Data/SustainabilityData/ActivityDatas";
import Banner from "../components/Banner";
import ActivityComponents from "../components/SustainabilityComponents/ActivityComponents";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.CommunityActivities;
      setActivity(data);
    };
    fetchData();
  }, []);

  if (activity.length === 0) return null;
  return (
    <>
      {activity.banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} place="Global Sustainability"/>;
      })}
      <ActivityComponents />
    </>
  );
};

export default Activity;

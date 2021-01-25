import React from "react";
import { ReportsHead } from "../components/Data/SustainabilityData/ReportsDatas";
import Banner from "../components/Banner";
import ReportsComponents from "../components/SustainabilityComponents/ReportsComponents";

const Reports = () => {
  return (
    <>
    {ReportsHead.map((data,idx)=>{
        return(
      <Banner img={data.img} texted={true} key={idx}/>
    )})}
      <ReportsComponents />
    </>
  );
};

export default Reports;
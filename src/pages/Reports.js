import React, { useState, useEffect } from "react";
import { sustainService } from "../service/Sustainability";
import Banner from "../components/Banner";
import ReportsComponents from "../components/SustainabilityComponents/ReportsComponents";

const Reports = () => {
  const [report, setReport] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.QHSE;
      setReport(data);
    };
    fetchData();
  }, []);

  if (report.length === 0) return null;
  return (
    <>
      {report.banner.map((data, idx) => {
        return <Banner img={data.url} texted={true} key={idx} />;
      })}
      <ReportsComponents />
    </>
  );
};

export default Reports;

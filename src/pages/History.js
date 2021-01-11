import React from "react";
import Banner from "../components/Banner";
import {HistoryHead} from "../components/Data/AboutusData/HistoryDatas";
import HistoryComponents from "../components/AboutUsComponents/HistoryComponents";

const History = () => {
  return (
    <>
      <Banner {...HistoryHead}/>
      <HistoryComponents />
    </>
  );
};

export default History;
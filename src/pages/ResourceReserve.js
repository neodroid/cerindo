import React from "react";
import { ResourceReserveHead } from "../components/Data/BusinessData/ResourceReserveDatas";
import Banner from "../components/Banner";
import ResourceReserveComponents from "../components/BusinessComponents/ResourceReserveComponents";

const ResourceReserve = () => {
  return (
    <>
      <Banner {...ResourceReserveHead} />
      <ResourceReserveComponents/>
    </>
  );
};

export default ResourceReserve;

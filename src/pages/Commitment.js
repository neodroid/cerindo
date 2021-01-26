import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CommitmentComponents from "../components/AboutUsComponents/CommitmentComponents";

const Commitment = () => {
  return (
    <>
      <Banner
        heading="COMMITMENT"
        lightText={true}
      />
      <CommitmentComponents />
    </>
  );
};

export default Commitment;

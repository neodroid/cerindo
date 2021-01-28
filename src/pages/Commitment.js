import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CommitmentComponents from "../components/AboutUsComponents/CommitmentComponents";
import { aboutUsService } from "../service/Aboutus";
const Commitment = () => {
  const [commitment, setCommitment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setCommitment(data.Commitment);
    };
    fetchData();
  }, []);

  if (commitment.length === 0) return null;
  return (
    <>
      {commitment.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            lightText={true}
            texted={true}
            key={idx}
            place="About Us"
          />
        );
      })}
      <CommitmentComponents />
    </>
  );
};

export default Commitment;

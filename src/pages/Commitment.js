import React, { useEffect, useState, useContext } from "react";
import Banner from "../components/Banner";
import CommitmentComponents from "../components/AboutUsComponents/CommitmentComponents";
import { aboutUsService } from "../service/Aboutus";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const Commitment = () => {
  const { language } = useContext(langContext);
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
            place={AboutUsTitle(language)}
          />
        );
      })}
      <CommitmentComponents />
    </>
  );
};

export default Commitment;

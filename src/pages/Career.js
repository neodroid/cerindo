import React, { useState, useEffect, useContext } from "react";
import { careerService } from "../service/Career";
import Banner from "../components/Banner";
import { CareerHead } from "../components/Data/CareerData";
import CareerComponents from "../components/CareerComponents";
import { langContext } from '../langContext';
import { CareerTitle } from '../components/CareerComponents/CareerLang';

const Career = () => {
  const { language } = useContext(langContext);
  const [career, setCareer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await careerService.getCareer();
      const data = response.data;
      setCareer(data);
    };
    fetchData();
  }, []);
  if (career.length === 0) return null;
  return (
    <>
      <Banner
        lightText={true}
        texted={true}
        place={CareerTitle(language)}
        img={career.banner[0].url}
      />
      <CareerComponents />
    </>
  );
};

export default Career;

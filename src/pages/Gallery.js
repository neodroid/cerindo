import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../service/Aboutus";
import Banner from "../components/Banner";
import GalleryComponents from "../components/AboutUsComponents/GalleryComponents";
import { langContext } from '../langContext';
import { AboutUsTitle } from '../components/AboutUsComponents/AboutUsLang';

const Gallery = () => {
  const { language } = useContext(langContext);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setGallery(data.gallery);
    };
    fetchData();
  }, []);
  console.log(gallery);
  if (gallery.length === 0) return null;
  return (
    <>
      {gallery.banner.map((data, idx) => {
        return (
          <Banner img={data.url} texted={true} key={idx} place={AboutUsTitle(language)} />
        );
      })}
      <GalleryComponents />
    </>
  );
};

export default Gallery;

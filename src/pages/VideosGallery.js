import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../service/Aboutus";
import Banner from "../components/Banner";
import VideosComponents from "../components/NewsGalleryComponents/GalleryComponents/VideosComponents";
import { langContext } from '../langContext';
import { NewsGalleryTitle } from '../components/NewsGalleryComponents/NewsGalleryLang';

const VideosGallery = () => {
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
          <Banner img={data.url} texted={true} key={idx} place={NewsGalleryTitle(language)} />
        );
      })}
      <VideosComponents />
    </>
  );
};

export default VideosGallery;

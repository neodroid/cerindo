import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../service/Aboutus";
import { Link } from "react-router-dom";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import NewsGallerySidebarComponents from "../index";
import { GalleryTitle } from "../../Data/AboutusData/GalleryDatas";
import {
  GalleryAllContent,
  VideoGridOther,
  VideoContentMain,
  VideoContentOther,
  VideoContentPartMain,
  Figured,
  VideoContainerOther,
} from "./GalleryElements";
import { langContext } from "../../../langContext";
import {
  GalleryLangTitle,
  GalleryLangParans,
  GalleryLangVideo,
  GalleryLangVideoTitle,
} from "./GalleryLang";

const GalleryComponents = () => {
  const { language } = useContext(langContext);
  const [videoGallery, setVideoGallery] = useState([]);
  const [photoGallery, setPhotoGallery] = useState([]);
  const fetchVideo = async () => {
    const response = await aboutUsService.getVideoGallery();
    const data = response.data;
    setVideoGallery(data);
  };

  const fetchPhoto = async () => {
    const response = await aboutUsService.getPhotoGallery();
    const data = response.data;
    setPhotoGallery(data);
  };
  useEffect(() => {
    fetchVideo();
    fetchPhoto();
  }, []);

  if (videoGallery.length === 0) return null;
  if (photoGallery.length === 0) return null;
  console.log(videoGallery[0]);
  return (
    <>
      <Aboutstyle>
        <NewsGallerySidebarComponents page3={true} />
        <AboutMain>
           <a href="/VideosGallery">videos</a>
           <br/>
           <a href="/PhotosGallery">photos</a>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default GalleryComponents;

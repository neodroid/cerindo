import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../service/Aboutus";
import { Link } from "react-router-dom";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import AboutSideBarComponents from "../index";
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
        <AboutSideBarComponents page9={true} />
        <AboutMain>
          <GalleryAllContent>
            <h2>{GalleryLangParans(GalleryTitle.profile, language)}</h2>
            <VideoContentPartMain>
              <VideoContentMain
                controls
                src={GalleryLangVideo(videoGallery[0], language).props.children}
              />
            </VideoContentPartMain>
            <h2>{GalleryLangParans(GalleryTitle.other, language)}</h2>
            <VideoGridOther>
              {videoGallery.slice(1).map((data, idx) => {
                return (
                  <VideoContainerOther>
                    <VideoContentOther
                      controls
                      src={GalleryLangVideo(data, language).props.children}
                      key={idx}
                    />
                      <p>{GalleryLangVideoTitle(data, language)}</p>                      
                  </VideoContainerOther>
                );
              })}
            </VideoGridOther>
            <h2>Photo Gallery</h2>
            <VideoGridOther>
              {photoGallery.map((data, idx) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/Album/${data._id}`}
                  >
                    <Figured key={idx}>
                      <img src={data.image[0].url} alt={data.title_en} />
                      <figcaption>
                        {GalleryLangTitle(data, language)}
                      </figcaption>
                    </Figured>
                  </Link>
                );
              })}
            </VideoGridOther>
          </GalleryAllContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default GalleryComponents;

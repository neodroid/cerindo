import React from "react";
import {Link} from "react-router-dom";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import {GalleryData,GalleryPhotoData,VideoProfileData} from "../../Data/AboutusData/GalleryDatas"
import {
  GalleryAllContent,
  VideoGridOther,
  VideoContentMain,
  VideoContentOther,
  VideoContentPartMain,
  Figured,
  VideoContainerOther
} from "./GalleryElements"

const GalleryComponents = () => {
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page9={true} />
        <AboutMain>
          <GalleryAllContent>
            <h2>Ceria Profile Video</h2>
            <VideoContentPartMain>
                <VideoContentMain 
                controls
                src={VideoProfileData.video}
                />
            </VideoContentPartMain>
              <h2>Other Video</h2>
              <VideoGridOther>
              {GalleryData.map((data,idx)=>{
                return(
                  <VideoContainerOther>
                  <VideoContentOther
                  controls
                  src={data.video}
                  key={idx}
                  />
                  <p>{data.caption}</p>
                  </VideoContainerOther>
                )
              })}
              </VideoGridOther>
            <h2>Photo Gallery</h2>
            <VideoGridOther>
              {GalleryPhotoData.map((data,idx)=>{
                return(
                  <Link style={{textDecoration:"none"}} to={`/Album/${data.caption}`}>
                    <Figured key={idx}>
                      <img src={data.thumbnail} alt={data.thumbnail} />
                      <figcaption>{data.caption}</figcaption>
                    </Figured>
                  </Link>
                )
              })}
            </VideoGridOther>
          </GalleryAllContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default GalleryComponents;

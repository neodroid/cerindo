import React from "react";
import Banner from "../components/Banner";
import GalleryComponents from "../components/AboutUsComponents/GalleryComponents";

const Gallery = () => {
  return (
    <>
          <Banner
            texted={true}
            place="About Us"/>
      <GalleryComponents />
    </>
  );
};

export default Gallery;

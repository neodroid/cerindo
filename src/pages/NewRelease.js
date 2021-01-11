import React from "react";
import Banner from "../components/Banner";
import {NReleaseBanner} from "../components/Data/News";
import NewsMedia from "../components/CorporateNewsComponents/NewsReleaseComponents/NewsMediaComponents";
import NewsContent from "../components/CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents";

const NewsRelease = () => {
  return (
    <>
    <Banner {...NReleaseBanner} />
    <NewsMedia />
    <NewsContent />
    </>
  );
};

export default NewsRelease;
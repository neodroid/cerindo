import React from "react";
import Banner from "../components/Banner";
import {NReleaseBanner} from "../components/Data/News";
import NewsContent from "../components/CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents";

const NewsRelease = () => {
  return (
    <>
    <Banner {...NReleaseBanner} />
    <NewsContent />
    </>
  );
};

export default NewsRelease;
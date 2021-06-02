import React, { useState, useEffect, useContext } from "react";
import { newsSource } from "../../Data/News";
import { newsService } from "../../../service/News";
import {
  TitleAnnoun,
  BoxContainer,
  BlogImage,
  AnnounWrapped,
  Nulity,
  BlogWrapped,
  DateWrapped
} from "../NewsComponent/NewsElements";
import Banner from "../../Banner";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import AboutSideBarComponents from "../../AboutUsComponents/index";
import { langContext } from "../../../langContext";
import { AboutUsTitle } from "../../AboutUsComponents/AboutUsLang";
import { aboutUsService } from "../../../service/Aboutus";
import {
  DetailsNewsLangTitle,
  DetailsAnouncementLangContent
} from "../NewsComponent/NewsLang";
import { FaArrowRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const AnnouncementPage = (props) => {
  const { language } = useContext(langContext);
  const [detailsAnnouncement, setDetailsAnnouncement] = useState([]);
  const [listAnnouncement, setListAnnouncement] = useState([]);
  const [press, setPress] = useState([]);

  const fetchDataDetails = async () => {
    const response = await newsService.getDetailAnnouncement(props.match.params.id);
    const data = response.data;
    setDetailsAnnouncement(data);
  };
  const fetchDataList = async () => {
    const response = await newsService.getListAnnouncement();
    const data = response.data;
    setListAnnouncement(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setPress(data.press_release);
    };
    fetchData();
    fetchDataDetails();
    fetchDataList();
  }, []);
  if (detailsAnnouncement === 0) return null;
  if (listAnnouncement.length === 0) return null;
  if (press.length === 0) return null;
  console.log(DetailsAnouncementLangContent(detailsAnnouncement, language))
  return (
    <>
      {press.banner.map((data, idx) => {
        return (
          <Banner
            img={data.url}
            texted={true}
            key={idx}
            place={AboutUsTitle(language)}
          />
        );
      })}
      <Aboutstyle>
        <AboutSideBarComponents page8={true} />
        <AboutMain>
            <DateWrapped/>
          <TitleAnnoun>
            {DetailsNewsLangTitle(detailsAnnouncement, language)}
          </TitleAnnoun>
          {detailsAnnouncement.image == null ? (
            <Nulity></Nulity>
          ) : (
            <BlogWrapped image>
              <BlogImage src={detailsAnnouncement.image} />
            </BlogWrapped>
          )}
          <AnnounWrapped>
            <BoxContainer>
              {DetailsAnouncementLangContent(detailsAnnouncement, language)}
            </BoxContainer>
          </AnnounWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};

export default AnnouncementPage;

import React, { useState, useEffect, useContext } from "react";
import { NewsData } from "../../Data/News";
import { newsService } from "../../../service/News";
import {
  TitleContent,
  DateWrapped,
  BoxContainer,
  BlogImage,
  BlogWrapped,
  BlogApart,
  BlogDivApart,
  ArticlePart,
  Linked,
  BlogImageArt,
  Nulity,
  ButtonNext,
  OtherNews,
} from "./NewsElements";
import Banner from "../../Banner";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import AboutSideBarComponents from "../../AboutUsComponents/index";
import { langContext } from "../../../langContext";
import { AboutUsTitle } from '../../AboutUsComponents/AboutUsLang';
import { aboutUsService } from "../../../service/Aboutus";
import {
  DetailsNewsLangTitle,
  DetailsNewsLangContent,
  NewsLangTitle,
} from "./NewsLang";
import { FaArrowRight } from "react-icons/fa";

const ManageOthArtData = ({ image, title, date }) => {
  return (
    <Linked to={`/News/${title}`}>
      <BlogApart art>
        <BlogDivApart imagart>
          <BlogImageArt src={image} />
        </BlogDivApart>
        <BlogDivApart contain>
          <BoxContainer title>
            <h4>{title}</h4>
          </BoxContainer>
          <BoxContainer>
            <h6>{date}</h6>
          </BoxContainer>
        </BlogDivApart>
      </BlogApart>
    </Linked>
  );
};

const NewsComponent = (props) => {
  const { language } = useContext(langContext);
  const [detailsNews, setDetailsNews] = useState([]);
  const [listNews, setListNews] = useState([]);
  const [press, setPress] = useState([]);

  const fetchDataDetails = async () => {
    const response = await newsService.getDetailNews(props.match.params.title);
    const data = response.data;
    setDetailsNews(data);
  };
  const fetchDataList = async () => {
    const response = await newsService.getListNews();
    const data = response.data;
    setListNews(data);
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
  if (detailsNews.length === 0) return null;
  if (listNews.length === 0) return null;
  if (press.length === 0) return null;
  return (
    <>
      {press.banner.map((data, idx) => {
        return (
          <Banner img={data.url} texted={true} key={idx} place={AboutUsTitle(language)} />
        );
      })}
      <Aboutstyle>
        <AboutSideBarComponents page8={true} />
        <AboutMain>
          <DateWrapped>
            <BoxContainer>{detailsNews.date}</BoxContainer>
          </DateWrapped>
          <TitleContent>
            {DetailsNewsLangTitle(detailsNews, language)}
          </TitleContent>
          {detailsNews.image.url.length==0?(
            <Nulity></Nulity>
          ):(
          <BlogWrapped image>
            <BlogImage src={detailsNews.image.url} />
          </BlogWrapped>)}
          <BlogWrapped>
            <BoxContainer>
              {DetailsNewsLangContent(detailsNews, language)}
            </BoxContainer>
          </BlogWrapped>
          <OtherNews href={detailsNews.source_link}>
            <ButtonNext>
              View Source <FaArrowRight style={{ marginLeft: "10px" }} />
            </ButtonNext>
          </OtherNews>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};

export default NewsComponent;

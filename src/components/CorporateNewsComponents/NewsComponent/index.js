import React, { useState, useEffect, useContext } from "react";
import { NewsData } from "../../Data/News";
import { newsService } from "../../../service/News";
import {
  TitleContent,
  BoxContainer,
  BlogImage,
  BlogWrapped,
  BlogApart,
  BlogDivApart,
  ArticlePart,
  Linked,
  BlogImageArt,
  GlobalContent,
} from "./NewsElements";
import { langContext } from "../../../langContext";
import { DetailsNewsLangTitle, DetailsNewsLangContent, NewsLangTitle } from "./NewsLang";

const ManageOthArtData = ({ image, title, date }) => {
  return (
    <Linked to={`/News/${title}`}>
      <BlogApart art>
        <BlogDivApart imagart>
          <BlogImageArt src={image} />
        </BlogDivApart>
        <BlogDivApart contain>
          <BoxContainer>
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
  const {language} = useContext(langContext);
  const [detailsNews, setDetailsNews] = useState([]);
  const [listNews, setListNews] = useState([]);
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
    fetchDataDetails();
    fetchDataList();
  }, []);
  if (detailsNews.length === 0) return null;
  if (listNews.length === 0) return null;

  console.log(detailsNews.news_en);
  return (
    <>
      <GlobalContent>
        <BlogApart containe>
          <BlogDivApart contain>
            <TitleContent>{DetailsNewsLangTitle(detailsNews, language)}</TitleContent>
            <BlogWrapped image>
              <BlogImage src={detailsNews.news_img.url} />
            </BlogWrapped>
            <BlogWrapped>
              <BoxContainer>{DetailsNewsLangContent(detailsNews, language)}</BoxContainer>
            </BlogWrapped>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {listNews.map((data, idx) => (
                <ManageOthArtData
                  key={idx}
                  image={data.news_img.url}
                  title={NewsLangTitle(data, language)}
                  date={data.news_date}
                />
              ))}
            </ArticlePart>
          </BlogDivApart>
        </BlogApart>
      </GlobalContent>
    </>
  );
};

export default NewsComponent;

import React, { useState, useEffect } from "react";
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
            <TitleContent>{detailsNews.title_en}</TitleContent>
            <BlogWrapped image>
              <BlogImage src={detailsNews.news_img.url} />
            </BlogWrapped>
            <BlogWrapped>
              <BoxContainer>{detailsNews.news_en}</BoxContainer>
            </BlogWrapped>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {listNews.map((data, idx) => (
                <ManageOthArtData
                  key={idx}
                  image={data.news_img.url}
                  title={data.title_en}
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

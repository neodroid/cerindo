import React, { useState, useEffect, useContext, useRef } from "react";
import { communityService } from "../../../../service/Community";
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
} from "../../../CorporateNewsComponents/NewsComponent/NewsElements";
import { langContext } from "../../../../langContext";
import {
  ActivityContentLangTitle,
  ActivityContentDetailsLangTitle,
  ActivityContentDetailsLangNews,
} from "./ActivityContentLang";
import { ActivityLangTitle } from "../ActivityLang";
import { Redirect } from "react-router-dom";

const ManageOthArtData = ({ image, id, date, title }) => {
  return (
    <Linked to={`/Community-Activity/${id}`}>
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

const ActivityContentComponent = (props) => {
  const { language } = useContext(langContext);
  const [detailsCommunity, setDetailsCommunity] = useState([]);
  const [listCommunity, setListCommunity] = useState([]);

  const fetchDataDetails = async () => {
    const response = await communityService.getDetailCommunity(
      props.match.params.id
    );
    const data = response.data;
    setDetailsCommunity(data);
  };
  const fetchDataList = async () => {
    const response = await communityService.getListCommunity();
    const data = response.data;
    setListCommunity(data);
  };

  useEffect(() => {
    fetchDataDetails();
    fetchDataList();
  }, [props.match.params.id]);

  if (detailsCommunity.length === 0) return null;
  if (listCommunity.length === 0) return null;

  return (
    <>
      <GlobalContent key={changed}>
        <BlogApart containe>
          <BlogDivApart contain>
            <TitleContent>
              {ActivityContentDetailsLangTitle(detailsCommunity, language)}
            </TitleContent>
            <BlogWrapped image>
              <BlogImage src={detailsCommunity.image.url} />
            </BlogWrapped>
            <BlogWrapped>
              <BoxContainer>
                {ActivityContentDetailsLangNews(detailsCommunity, language)}
              </BoxContainer>
            </BlogWrapped>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {listCommunity.map((data, idx) => (
                <ManageOthArtData
                  key={idx}
                  image={data.image.url}
                  id={data._id}
                  date={data.date}
                  title={ActivityLangTitle(data, language)}
                />
              ))}
            </ArticlePart>
          </BlogDivApart>
        </BlogApart>
      </GlobalContent>
    </>
  );
};

export default ActivityContentComponent;

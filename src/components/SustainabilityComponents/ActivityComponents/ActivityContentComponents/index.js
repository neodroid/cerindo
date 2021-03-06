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
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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

  function shuffleArray(array){
    array.sort(function(){
        return 0.5-Math.random();
    });
}
shuffleArray(listCommunity);

  return (
    <>
      <GlobalContent>
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
                <ReactMarkdown
                  children={
                    ActivityContentDetailsLangNews(detailsCommunity, language)
                      .props.children
                  }
                  plugins={[[gfm, { singleTilde: false }]]}
                  allowDangerousHtml={true}
                />
              </BoxContainer>
            </BlogWrapped>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {listCommunity.slice(0,4).map((data, idx) => (
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

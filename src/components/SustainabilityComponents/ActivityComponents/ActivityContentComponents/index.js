import React, { useState, useEffect, useContext } from "react";
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

const ManageOthArtData = ({ image, id, date, title }) => {
  return (
    <Linked to={`/Community-Activity/${id}`}>
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

const ActivityContentComponent = (props) => {
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
  console.log(props);

  useEffect(() => {
    fetchDataDetails();
    fetchDataList();
  }, []);
  if (detailsCommunity.length === 0) return null;
  if (listCommunity.length === 0) return null;

  return (
    <>
      <GlobalContent>
        <BlogApart containe>
          <BlogDivApart contain>
            <TitleContent>{detailsCommunity.title_en}</TitleContent>
            <BlogWrapped image>
              <BlogImage src={detailsCommunity.image.url} />
            </BlogWrapped>
            <BlogWrapped>
              <BoxContainer>{detailsCommunity.news_en}</BoxContainer>
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
                  title={data.title_en}
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

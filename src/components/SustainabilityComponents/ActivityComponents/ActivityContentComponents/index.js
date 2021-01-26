import React, { useState, useEffect, useContext } from "react";
import { NewsData } from "../../Data/News";
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

const ActivityContentComponent = ({match}) => {
    const newss = NewsData.filter(x => x['_id'] == match.params._id)
    function shuffleArray(array){
        array.sort(function(){
            return 0.5-Math.random();
        });
    }
    shuffleArray(NewsData);
  return (
    <>
      <GlobalContent>
        <BlogApart containe>
          <BlogDivApart contain>
            <TitleContent>
              {newss.title}
            </TitleContent>
            <BlogWrapped image>
              <BlogImage src={newss.image} />
            </BlogWrapped>
            <BlogWrapped>
              <BoxContainer>
                {newss.content}
              </BoxContainer>
            </BlogWrapped>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {NewsData.map((data, idx) => (
                <ManageOthArtData
                  key={idx}
                  image={data.image}
                  title={data.title}
                  date={data.date}
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

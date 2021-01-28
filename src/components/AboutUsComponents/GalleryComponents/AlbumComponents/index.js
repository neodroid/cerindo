import React from "react";
import { GalleryPhotoData } from "../../../Data/AboutusData/GalleryDatas";
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
import {
    AlbumGrid,
    Image
} from "./AlbumElements"

const ManageOthArtData = ({ image, title, date }) => {
  return (
    <Linked to={`/Album/${title}`}>
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

const AlbumComponent = ({match}) => {
    const photo = GalleryPhotoData.filter(x => x['caption'] == match.params.caption)

    function shuffleArray(array){
        array.sort(function(){
            return 0.5-Math.random();
        });
    }
    shuffleArray(GalleryPhotoData);
  return (
    <>
      <GlobalContent>
        <BlogApart containe>
          <BlogDivApart contain>
          {photo.map((data,idx)=>{
              return(
                <>
                <TitleContent key={idx}>
                {data.caption}
                </TitleContent>
                </>
            )})}
            <AlbumGrid>
            {photo.map(obj=>obj.album.map((data,idx)=>{
                return(
                <Image src={data.image}/>
                )
            }))}
            </AlbumGrid>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {GalleryPhotoData.map((data, idx) => {
                  if(idx < 4){
                  return(
                    <ManageOthArtData
                    key={idx}
                    image={data.thumbnail}
                    title={data.caption}
                    date={data.date}
                    />)}
                })}
            </ArticlePart>
          </BlogDivApart>
        </BlogApart>
      </GlobalContent>
    </>
  );
};

export default AlbumComponent;

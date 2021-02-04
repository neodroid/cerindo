import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../../service/Aboutus";
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
import { AlbumGrid, Image } from "./AlbumElements";
import { langContext } from "../../../../langContext";
import { GalleryLangTitle } from "../GalleryLang";

const ManageOthArtData = ({ image, title, id, date }) => {
  return (
    <Linked to={`/Album/${id}`}>
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

const AlbumComponent = (props) => {
  const { language } = useContext(langContext);
  const [photoListGallery, setPhotoListGallery] = useState([]);
  const [photoDetailedGallery, setPhotoDetailedGallery] = useState([]);
  const fetchListPhoto = async () => {
    const response = await aboutUsService.getPhotoGallery();
    const data = response.data;
    setPhotoListGallery(data);
  };
  const fetchDetailedPhoto = async () => {
    const response = await aboutUsService.getDetailedPhotoGallery(
      props.match.params.id
    );
    const data = response.data;
    setPhotoDetailedGallery(data);
  };
  useEffect(() => {
    fetchListPhoto();
    fetchDetailedPhoto();
  }, []);
  console.log(photoDetailedGallery);

  if (photoListGallery.length === 0) return null;
  if (photoDetailedGallery.length === 0) return null;
  return (
    <>
      <GlobalContent>
        <BlogApart containe>
          <BlogDivApart contain>
            <TitleContent>{photoDetailedGallery.title_en}</TitleContent>
            <AlbumGrid>
              {photoDetailedGallery.image.map((val) => {
                return <Image src={val.url} />;
              })}
            </AlbumGrid>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>Other Article</TitleContent>
            <ArticlePart>
              {photoListGallery.map((data, idx) => {
                return (
                  <ManageOthArtData
                    id={data._id}
                    key={idx}
                    image={data.image[0].url}
                    title={GalleryLangTitle(data, language)}
                  />
                );
              })}
            </ArticlePart>
          </BlogDivApart>
        </BlogApart>
      </GlobalContent>
    </>
  );
};

export default AlbumComponent;

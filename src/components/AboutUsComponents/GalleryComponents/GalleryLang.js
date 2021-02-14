import React from "react";

export const GalleryLangTitle = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.title_en}</div>
    ) : lang === "id" ? (
      <div>{data.title_id}</div>
    ) : lang === "cn" ? (
      <div>{data.title_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const GalleryLangTitlePhoto = (photoDetailedGallery, lang) => {
  var text =
    lang === "en" ? (
      <div>{photoDetailedGallery.title_en}</div>
    ) : lang === "id" ? (
      <div>{photoDetailedGallery.title_id}</div>
    ) : lang === "cn" ? (
      <div>{photoDetailedGallery.title_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const GalleryLangParans = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.en}</div>
    ) : lang === "id" ? (
      <div>{data.id}</div>
    ) : lang === "cn" ? (
      <div>{data.ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const GalleryLangVideo = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.video_en.url}</div>
    ) : lang === "id" ? (
      <div>{data.video_id.url}</div>
    ) : lang === "cn" ? (
      <div>{data.video_ch.url}</div>
    ) : (
      <> </>
    );

  return text;
};

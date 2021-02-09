import React from 'react'

export const GalleryLangTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.title_en}</div> :
    (lang === "id") ? 
        <div>{data.title_id}</div> :
    (lang === "cn") ? 
        <div>{data.title_ch}</div> : <></>;

    return text
}

export const GalleryLangTitlePhoto = (photoDetailedGallery, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{photoDetailedGallery.title_en}</div> :
    (lang === "id") ? 
        <div>{photoDetailedGallery.title_id}</div> :
    (lang === "cn") ? 
        <div>{photoDetailedGallery.title_ch}</div> : <></>;

    return text
}
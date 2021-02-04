import React from 'react'

export const GalleryLangTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.title_en}</div> :
    (lang === "id") ? 
        <div>{data.title_id}</div> :
    (lang === "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text
}

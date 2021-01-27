import react from 'react'

import React from 'react'

export const ActivityContentLangTitle = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{data.title_en}</div> :
    (lang == "id") ? 
        <div>{data.title_id}</div> :
    (lang == "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text
}

export const ActivityContentDetailsLangTitle = (detailsCommunity, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{detailsCommunity.title_en}</div> :
    (lang == "id") ? 
        <div>{detailsCommunity.title_id}</div> :
    (lang == "cn") ? 
        <div>{detailsCommunity.title_ch}</div> : null;

    return text
}

export const ActivityContentDetailsLangNews = (detailsCommunity, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{detailsCommunity.news_en}</div> :
    (lang == "id") ? 
        <div>{detailsCommunity.news_id}</div> :
    (lang == "cn") ? 
        <div>{detailsCommunity.news_ch}</div> : null;

    return text
}
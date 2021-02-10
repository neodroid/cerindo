import React from 'react'

export const DetailsNewsLangTitle = (detailsNews, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{detailsNews.title_en}</div> :
    (lang === "id") ? 
        <div>{detailsNews.title_id}</div> :
    (lang === "cn") ? 
        <div>{detailsNews.title_ch}</div> : <> </>;

    return text;
}

export const DetailsNewsLangContent = (detailsNews, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{detailsNews.news_en}</div> :
    (lang === "id") ? 
        <div>{detailsNews.news_id}</div> :
    (lang === "cn") ? 
        <div>{detailsNews.news_ch}</div> : <> </>;

    return text;
}

export const NewsLangTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.title_en}</div> :
    (lang === "id") ? 
        <div>{data.title_id}</div> :
    (lang === "cn") ? 
        <div>{data.title_ch}</div> : <> </>;

    return text;
}
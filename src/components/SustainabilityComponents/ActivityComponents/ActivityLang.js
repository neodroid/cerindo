import React from 'react'

export const ActivityLangTitle = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{data.title_en}</div> :
    (lang == "id") ? 
        <div>{data.title_id}</div> :
    (lang == "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text
}

export const ActivityLangBody = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{`${data.news_en.substring(0, 100)}...`}</div> :
    (lang == "id") ? 
        <div>{`${data.news_id.substring(0, 100)}...`}</div> :
    (lang == "cn") ? 
        <div>{`${data.news_ch.substring(0, 100)}...`}</div> : null;

    return text
}
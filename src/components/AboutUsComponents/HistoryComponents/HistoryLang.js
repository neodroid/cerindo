import React from 'react'

export const HistoryLangTitle = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{data.title_en}</div> :
    (lang == "id") ? 
        <div>{data.title_id}</div> :
    (lang == "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text;
}

export const HistoryLangDesc = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{data.description_en}</div> :
    (lang == "id") ? 
        <div>{data.description_id}</div> :
    (lang == "cn") ? 
        <div>{data.description_ch}</div> : null;

    return text;
}
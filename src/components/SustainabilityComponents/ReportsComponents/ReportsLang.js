import React from 'react'

export const ReportsDataLangTitle = (ReportsData, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{ReportsData.title_en}</div> :
    (lang == "id") ? 
        <div>{ReportsData.title_id}</div> :
    (lang == "cn") ? 
        <div>{ReportsData.title_ch}</div> : null;

    return text
}

export const ReportsDataLangBody = (ReportsData, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{ReportsData.body_en}</div> :
    (lang == "id") ? 
        <div>{ReportsData.body_id}</div> :
    (lang == "cn") ? 
        <div>{ReportsData.body_ch}</div> : null;

    return text
}
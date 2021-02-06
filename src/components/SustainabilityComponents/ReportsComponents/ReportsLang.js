import React from 'react'

export const ReportsDataLangTitle = (ReportsData, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{ReportsData.title_en}</div> :
    (lang === "id") ? 
        <div>{ReportsData.title_id}</div> :
    (lang === "cn") ? 
        <div>{ReportsData.title_ch}</div> : null;

    return text
}

export const ReportsDataLangBody = (ReportsData, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{ReportsData.body_en}</div> :
    (lang === "id") ? 
        <div>{ReportsData.body_id}</div> :
    (lang === "cn") ? 
        <div>{ReportsData.body_ch}</div> : null;

    return text
}

export const ReportsDataLangFile = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <>{data.title_en}</> :
    (lang === "id") ? 
        <>{data.title_id}</> :
    (lang === "cn") ? 
        <>{data.title_ch}</> : null;

    return text
}

export const ReportsDataLangButton = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <>DOWNLOAD</> :
    (lang === "id") ? 
        <>UNDUH</> :
    (lang === "cn") ? 
        <>下载</> : null;

    return text
}


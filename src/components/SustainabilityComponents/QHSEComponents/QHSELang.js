import React from 'react'

export const QHSEContentLangTitle = (QHSEContent, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{QHSEContent.title_en}</div> :
    (lang === "id") ? 
        <div>{QHSEContent.title_id}</div> :
    (lang === "cn") ? 
        <div>{QHSEContent.title_ch}</div> : null;

    return text
}

export const QHSEContentLangBody = (QHSEContent, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{QHSEContent.body_en}</div> :
    (lang === "id") ? 
        <div>{QHSEContent.body_id}</div> :
    (lang === "cn") ? 
        <div>{QHSEContent.body_ch}</div> : null;

    return text
}
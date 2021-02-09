import React from 'react'

export const AwardContentLangTitle = (AwardContent, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{AwardContent.title_en}</div> :
    (lang === "id") ? 
        <div>{AwardContent.title_id}</div> :
    (lang === "cn") ? 
        <div>{AwardContent.title_ch}</div> : <></>;

    return text
}

export const AwardContentLangBody = (AwardContent, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{AwardContent.body_en}</div> :
    (lang === "id") ? 
        <div>{AwardContent.body_id}</div> :
    (lang === "cn") ? 
        <div>{AwardContent.body_ch}</div> : <></>;

    return text
}
import React from 'react'

export const CommitmentLangTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.title_en}</div> :
    (lang === "id") ? 
        <div>{data.title_id}</div> :
    (lang === "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text
}

export const CommitmentLangBody = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.body_en}</div> :
    (lang === "id") ? 
        <div>{data.body_id}</div> :
    (lang === "cn") ? 
        <div>{data.body_ch}</div> : null;

    return text
}
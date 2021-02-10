import React from 'react'

export const ConcessionLangTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.title_en}</div> :
    (lang === "id") ? 
        <div>{data.title_id}</div> :
    (lang === "cn") ? 
        <div>{data.title_ch}</div> : <> </>;

    return text
}

export const ConcessionLangBody = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.body_en}</div> :
    (lang === "id") ? 
        <div>{data.body_id}</div> :
    (lang === "cn") ? 
        <div>{data.body_ch}</div> : <> </>;

    return text
}
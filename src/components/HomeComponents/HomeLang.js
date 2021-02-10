import React from 'react'

export const HomeLangTitle = (homeData, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{homeData.title_en}</div> :
    (lang === "id") ? 
        <div>{homeData.title_id}</div> :
    (lang === "cn") ? 
        <div>{homeData.title_ch}</div> : <> </>;

    return text
}
export const HomeLangBody = (homeData, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{homeData.body_en}</div> :
    (lang === "id") ? 
        <div>{homeData.body_id}</div> :
    (lang === "cn") ? 
        <div>{homeData.body_ch}</div> : <> </>;

    return text
}

export const HomeLangButton = (homeData, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{homeData.button_en}</div> :
    (lang === "id") ? 
        <div>{homeData.button_id}</div> :
    (lang === "cn") ? 
        <div>{homeData.button_ch}</div> : <> </>;

    return text
}
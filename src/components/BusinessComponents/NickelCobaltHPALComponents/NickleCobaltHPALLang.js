import React from 'react'

export const NickleCobaltLangTitle = (nickelCobalt, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{nickelCobalt.title_en}</div> :
    (lang == "id") ? 
        <div>{nickelCobalt.title_id}</div> :
    (lang == "cn") ? 
        <div>{nickelCobalt.title_ch}</div> : null;

    return text
}

export const NickleCobaltLangBody = (nickelCobalt, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{nickelCobalt.body_en}</div> :
    (lang == "id") ? 
        <div>{nickelCobalt.body_id}</div> :
    (lang == "cn") ? 
        <div>{nickelCobalt.body_ch}</div> : null;

    return text
}
import React from 'react'

export const NickleOreLangTitle = (nickelOre, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{nickelOre.title_en}</div> :
    (lang == "id") ? 
        <div>{nickelOre.title_id}</div> :
    (lang == "cn") ? 
        <div>{nickelOre.title_ch}</div> : null;

    return text
}

export const NickleOreLangBody = (nickelOre, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{nickelOre.body_en}</div> :
    (lang == "id") ? 
        <div>{nickelOre.body_id}</div> :
    (lang == "cn") ? 
        <div>{nickelOre.body_ch}</div> : null;

    return text
}
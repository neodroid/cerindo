import React from 'react'

export const FerronickleLangTitle = (ferronicle, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{ferronicle.title_en}</div> :
    (lang == "id") ? 
        <div>{ferronicle.title_id}</div> :
    (lang == "cn") ? 
        <div>{ferronicle.title_ch}</div> : null;

    return text
}

export const FerronickleLangBody = (ferronicle, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{ferronicle.body_en}</div> :
    (lang == "id") ? 
        <div>{ferronicle.body_id}</div> :
    (lang == "cn") ? 
        <div>{ferronicle.body_ch}</div> : null;

    return text
}
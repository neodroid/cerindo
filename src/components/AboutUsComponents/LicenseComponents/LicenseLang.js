import React from 'react'

export const LicenseTitle = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{data.title_en}</div> :
    (lang == "id") ? 
        <div>{data.title_id}</div> :
    (lang == "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text
}

export const LicenseContent = (data, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{data.content_en}</div> :
    (lang == "id") ? 
        <div>{data.content_id}</div> :
    (lang == "cn") ? 
        <div>{data.content_ch}</div> : null;

    return text
}
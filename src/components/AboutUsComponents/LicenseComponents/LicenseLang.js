import React from 'react'

export const LicenseTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.title_en}</div> :
    (lang === "id") ? 
        <div>{data.title_id}</div> :
    (lang === "cn") ? 
        <div>{data.title_ch}</div> : null;

    return text
}

export const LicenseContent = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.content_en}</div> :
    (lang === "id") ? 
        <div>{data.content_id}</div> :
    (lang === "cn") ? 
        <div>{data.content_ch}</div> : null;

    return text
}

export const LicenseBody = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.body_en}</div> :
    (lang === "id") ? 
        <div>{data.body_id}</div> :
    (lang === "cn") ? 
        <div>{data.body_ch}</div> : null;

    return text
}

export const LicenseDataLangFile = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <>{data.name_en}</> :
    (lang === "id") ? 
        <>{data.name_id}</> :
    (lang === "cn") ? 
        <>{data.name_ch}</> : null;

    return text
}

export const LicenseDataLangButton = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <>DOWNLOAD</> :
    (lang === "id") ? 
        <>UNDUH</> :
    (lang === "cn") ? 
        <>下载</> : <> </>;

    return text
}

export const ConcessionTitle = (data, lang) =>{
    var text = 
    (lang === "en") ? 
        <>Concession Area</> :
    (lang === "id") ? 
        <>Area Konsesi</> :
    (lang === "cn") ? 
        <>特许区</> : <> </>;

    return text  
}
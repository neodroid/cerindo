import React from 'react'

export const CareerLangTitle = (career, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{career.Title.title_en}</div> :
    (lang === "id") ? 
        <div>{career.Title.title_id}</div> :
    (lang === "cn") ? 
        <div>{career.Title.title_ch}</div> : <> </>;

    return text
}

export const CareerLangBody = (career, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{career.Title.body_en}</div> :
    (lang === "id") ? 
        <div>{career.Title.body_id}</div> :
    (lang === "cn") ? 
        <div>{career.Title.body_ch}</div> : <> </>;

    return text
}

export const CareerLangEmployeeBody = (career, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{career.Title.body_en}</div> :
    (lang === "id") ? 
        <div>{career.Title.body_id}</div> :
    (lang === "cn") ? 
        <div>{career.Title.body_ch}</div> : <> </>;

    return text	
}

export const CareerTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>Career</> :
    (lang === "id") ? 
        <>Karir</> :
    (lang === "cn") ? 
        <>事业</> : <> </>;

    return text
}
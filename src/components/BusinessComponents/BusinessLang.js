import React from 'react'

export const BusinessTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>Business</> :
    (lang === "id") ? 
        <>Bisnis</> :
    (lang === "cn") ? 
        <>商业</> : <> </>;

    return text
}

export const BusinessSidebar = (data, lang, index) => {
    var text = 
    (lang === "en") ? 
        <>{data[index].en}</> :
    (lang === "id") ? 
        <>{data[index].id}</> :
    (lang === "cn") ? 
        <>{data[index].ch}</> : <> </>;

    return text
}

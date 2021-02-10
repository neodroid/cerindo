import React from 'react'

export const SustainabilityTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>Global Sustainability</> :
    (lang === "id") ? 
        <>Keberlangsungan Global</> :
    (lang === "cn") ? 
        <>全球可持续发展</> : <> </>;

    return text
}

export const SustainabilitySidebar = (data, lang, index) => {
    var text = 
    (lang === "en") ? 
        <>{data[index].en}</> :
    (lang === "id") ? 
        <>{data[index].id}</> :
    (lang === "cn") ? 
        <>{data[index].ch}</> : <> </>;

    return text
}